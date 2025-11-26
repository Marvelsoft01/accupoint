import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import reviewPerson1 from "@/assets/review-person-1.jpg";
import reviewPerson2 from "@/assets/review-person-2.jpg";
import reviewPerson3 from "@/assets/review-person-3.jpg";
import reviewPerson4 from "@/assets/review-person-4.jpg";

const reviews = [
  {
    name: "Hank Kowalski",
    company: "Tundra Equipment Rentals",
    rating: 5,
    text: "ACCOUPOINT TRUCKING has been our go-to carrier for over 3 years. Their reliability and professionalism are unmatched. Every shipment arrives on time, every time.",
    image: reviewPerson1
  },
  {
    name: "Victoria Brennan",
    company: "Glacier Bay Distributors",
    rating: 5,
    text: "The expedited shipping service saved our business during a critical deadline. Their team went above and beyond to ensure our cargo arrived safely and on schedule.",
    image: reviewPerson2
  },
  {
    name: "Marco Delgado",
    company: "Summit Industrial Supply",
    rating: 5,
    text: "Outstanding nationwide coverage and exceptional customer service. The tracking system keeps us informed every step of the way. Highly recommended!",
    image: reviewPerson3
  },
  {
    name: "Catherine Harwell",
    company: "Northstar Manufacturing",
    rating: 5,
    text: "Their insured and secure transport gave us peace of mind when shipping high-value equipment. Professional drivers and excellent communication throughout.",
    image: reviewPerson4
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by businesses across the nation for reliable freight solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
