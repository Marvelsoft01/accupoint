import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, CheckCircle2 } from "lucide-react";

const generateSecurityQuestion = () => {
  const operations = [
    { type: 'add', symbol: '+' },
    { type: 'subtract', symbol: '-' },
    { type: 'multiply', symbol: '×' },
  ];
  
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1: number, num2: number, answer: number;
  
  switch (operation.type) {
    case 'add':
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 + num2;
      break;
    case 'subtract':
      num1 = Math.floor(Math.random() * 10) + 5;
      num2 = Math.floor(Math.random() * num1);
      answer = num1 - num2;
      break;
    case 'multiply':
      num1 = Math.floor(Math.random() * 5) + 1;
      num2 = Math.floor(Math.random() * 5) + 1;
      answer = num1 * num2;
      break;
    default:
      num1 = 2;
      num2 = 3;
      answer = 5;
  }
  
  return {
    question: `What is ${num1} ${operation.symbol} ${num2}?`,
    answer: answer.toString(),
  };
};

const SmsConsent = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [securityQuestion, setSecurityQuestion] = useState(() => generateSecurityQuestion());
  
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    municipality: "",
    securityAnswer: "",
    smsConsent: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.mobileNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter your mobile number.",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.securityAnswer.trim() !== securityQuestion.answer) {
      toast({
        title: "Error",
        description: "Incorrect answer to the security question. Please try again.",
        variant: "destructive",
      });
      setSecurityQuestion(generateSecurityQuestion());
      setFormData((prev) => ({ ...prev, securityAnswer: "" }));
      return;
    }
    
    if (!formData.smsConsent) {
      toast({
        title: "Error",
        description: "Please agree to the SMS consent terms to subscribe.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Subscription Successful!",
      description: "You have been subscribed to SMS notifications from ACCOUPOINT TRUCKING.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-card rounded-2xl shadow-xl p-12 border border-border">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Subscription Confirmed!
                </h1>
                <p className="text-muted-foreground mb-8">
                  Thank you for subscribing to SMS notifications from ACCOUPOINT TRUCKING. 
                  You will now receive updates about our services, promotions, and important notifications.
                </p>
                <Button asChild size="lg">
                  <Link to="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                SMS Marketing Consent
              </h1>
              <p className="text-lg text-muted-foreground">
                Please fill out the form below to subscribe to our SMS notifications.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10 border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-foreground font-medium">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Mary John"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="mobileNumber" className="text-foreground font-medium">
                    Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="mobileNumber"
                    type="tel"
                    placeholder="+1234567890"
                    value={formData.mobileNumber}
                    onChange={(e) => handleChange("mobileNumber", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="municipality" className="text-foreground font-medium">
                    Municipality
                  </Label>
                  <Input
                    id="municipality"
                    type="text"
                    placeholder="Enter your city/municipality"
                    value={formData.municipality}
                    onChange={(e) => handleChange("municipality", e.target.value)}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="securityAnswer" className="text-foreground font-medium">
                    Security Question <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">
                    {securityQuestion.question}
                  </p>
                  <Input
                    id="securityAnswer"
                    type="text"
                    placeholder="Enter your answer"
                    value={formData.securityAnswer}
                    onChange={(e) => handleChange("securityAnswer", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="smsConsent"
                      checked={formData.smsConsent}
                      onCheckedChange={(checked) => handleChange("smsConsent", checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="smsConsent" className="text-sm text-foreground/90 leading-relaxed cursor-pointer">
                      By checking this box, I agree to receive marketing, account notifications, customer care, security alerts, and delivery notifications SMS messages from ACCOUPOINT TRUCKING at the number provided.
                      <br /><br />
                      <span className="text-muted-foreground">
                        Msg frequency varies. Msg & data rates may apply. Reply Help for Help. Reply STOP to opt out.
                      </span>
                      <br /><br />
                      <span className="text-muted-foreground">
                        View{" "}
                        <Link to="/privacy-policy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        {" "}and{" "}
                        <Link to="/terms-conditions" className="text-primary hover:underline">
                          Terms of Use
                        </Link>
                      </span>
                    </Label>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe to SMS Notifications"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SmsConsent;
