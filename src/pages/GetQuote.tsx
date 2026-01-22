import { useState } from "react";
import { Package, MapPin, Calendar, Truck, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const GetQuote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    phone: "",
    company: "",
    
    // Pickup Details
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    pickupDate: "",
    
    // Delivery Details
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryZip: "",
    deliveryDate: "",
    
    // Shipment Details
    serviceType: "",
    freightType: "",
    weight: "",
    dimensions: "",
    specialRequirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-form-email", {
        body: { formType: "quote", formData },
      });

      if (error) throw error;

      toast({
        title: "Quote Request Submitted!",
        description: "We'll send you a detailed quote within 2 hours.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        pickupAddress: "",
        pickupCity: "",
        pickupState: "",
        pickupZip: "",
        pickupDate: "",
        deliveryAddress: "",
        deliveryCity: "",
        deliveryState: "",
        deliveryZip: "",
        deliveryDate: "",
        serviceType: "",
        freightType: "",
        weight: "",
        dimensions: "",
        specialRequirements: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const features = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Get the best pricing for your shipping needs",
    },
    {
      icon: Truck,
      title: "Fast Response",
      description: "Receive your quote within 2 hours",
    },
    {
      icon: Package,
      title: "No Obligations",
      description: "Free quotes with no commitment required",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-primary py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Get Your Free Quote
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Fill out the form below and receive a detailed quote within 2 hours
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-lg border border-border">
                {/* Contact Information */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Package className="h-6 w-6 text-accent" />
                    Contact Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 862 268-9213"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Pickup Details */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-accent" />
                    Pickup Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="pickupAddress">Pickup Address *</Label>
                      <Input
                        id="pickupAddress"
                        placeholder="Street address"
                        value={formData.pickupAddress}
                        onChange={(e) => handleChange("pickupAddress", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickupCity">City *</Label>
                      <Input
                        id="pickupCity"
                        placeholder="City"
                        value={formData.pickupCity}
                        onChange={(e) => handleChange("pickupCity", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickupState">State *</Label>
                      <Input
                        id="pickupState"
                        placeholder="State"
                        value={formData.pickupState}
                        onChange={(e) => handleChange("pickupState", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickupZip">ZIP Code *</Label>
                      <Input
                        id="pickupZip"
                        placeholder="ZIP"
                        value={formData.pickupZip}
                        onChange={(e) => handleChange("pickupZip", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pickupDate">Pickup Date *</Label>
                      <Input
                        id="pickupDate"
                        type="date"
                        value={formData.pickupDate}
                        onChange={(e) => handleChange("pickupDate", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Details */}
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-accent" />
                    Delivery Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="deliveryAddress">Delivery Address *</Label>
                      <Input
                        id="deliveryAddress"
                        placeholder="Street address"
                        value={formData.deliveryAddress}
                        onChange={(e) => handleChange("deliveryAddress", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryCity">City *</Label>
                      <Input
                        id="deliveryCity"
                        placeholder="City"
                        value={formData.deliveryCity}
                        onChange={(e) => handleChange("deliveryCity", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryState">State *</Label>
                      <Input
                        id="deliveryState"
                        placeholder="State"
                        value={formData.deliveryState}
                        onChange={(e) => handleChange("deliveryState", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryZip">ZIP Code *</Label>
                      <Input
                        id="deliveryZip"
                        placeholder="ZIP"
                        value={formData.deliveryZip}
                        onChange={(e) => handleChange("deliveryZip", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="deliveryDate">Delivery Date *</Label>
                      <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => handleChange("deliveryDate", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipment Details */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Truck className="h-6 w-6 text-accent" />
                    Shipment Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                        <SelectTrigger id="serviceType">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-truckload">Full Truckload</SelectItem>
                          <SelectItem value="expedited">Expedited Shipping</SelectItem>
                          <SelectItem value="nationwide">Nationwide Coverage</SelectItem>
                          <SelectItem value="insured">Insured & Secure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="freightType">Freight Type *</Label>
                      <Select value={formData.freightType} onValueChange={(value) => handleChange("freightType", value)}>
                        <SelectTrigger id="freightType">
                          <SelectValue placeholder="Select freight type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Freight</SelectItem>
                          <SelectItem value="refrigerated">Refrigerated</SelectItem>
                          <SelectItem value="hazmat">Hazardous Materials</SelectItem>
                          <SelectItem value="oversized">Oversized Load</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Total Weight (lbs) *</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="e.g., 5000"
                        value={formData.weight}
                        onChange={(e) => handleChange("weight", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dimensions">Dimensions (L x W x H)</Label>
                      <Input
                        id="dimensions"
                        placeholder="e.g., 48 x 40 x 60"
                        value={formData.dimensions}
                        onChange={(e) => handleChange("dimensions", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="specialRequirements">Special Requirements</Label>
                      <Textarea
                        id="specialRequirements"
                        placeholder="Any special handling requirements, equipment needs, or additional information..."
                        rows={4}
                        value={formData.specialRequirements}
                        onChange={(e) => handleChange("specialRequirements", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  <Calendar className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Submitting..." : "Request Quote"}
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  By submitting this form, you agree to receive quote information via email and phone
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetQuote;
