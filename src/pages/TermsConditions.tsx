import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            <p className="text-muted-foreground mb-8">Last Updated: January 1, 2026</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms and Conditions ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ACCOUPOINT TRUCKING ("Company," "we," "us," or "our"), concerning your access to and use of our website and trucking/freight transportation services. You agree that by accessing the website and/or using our services, you have read, understood, and agree to be bound by all of these Terms. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  ACCOUPOINT TRUCKING provides freight transportation and trucking services across the United States. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Full Truckload (FTL) transportation</li>
                  <li>Less Than Truckload (LTL) services</li>
                  <li>Expedited and time-critical deliveries</li>
                  <li>Specialized freight handling</li>
                  <li>Real-time shipment tracking</li>
                  <li>Nationwide logistics solutions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Shipping and Delivery Terms</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Pickup and Delivery</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  All pickup and delivery times are estimates only and are not guaranteed unless specifically agreed upon in writing as a guaranteed service. We will make reasonable efforts to meet estimated delivery times but are not liable for delays caused by circumstances beyond our control.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.2 Freight Requirements</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  The shipper is responsible for ensuring that freight is properly packaged, labeled, and ready for transport at the scheduled pickup time. All freight must comply with applicable federal, state, and local laws and regulations.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">3.3 Prohibited Items</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right to refuse transportation of any items that are illegal, hazardous (unless properly documented and approved), or otherwise unsuitable for transport. Prohibited items include but are not limited to: illegal substances, undeclared hazardous materials, live animals (unless pre-approved), and items that violate export control laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Pricing and Payment</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Quotes and Pricing</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  All quotes provided are based on the information supplied by the customer. Final pricing may be adjusted based on actual weight, dimensions, accessorial services required, or discrepancies in the information provided. Quotes are valid for 30 days unless otherwise specified.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">4.2 Payment Terms</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Payment terms are net 30 days from the date of invoice unless otherwise agreed upon in writing. We reserve the right to require prepayment or credit approval for new customers. Late payments may be subject to interest charges of 1.5% per month.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">4.3 Accessorial Charges</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Additional charges may apply for services not included in the original quote, including but not limited to: detention time, layover, driver assist, liftgate service, inside delivery, residential delivery, and redelivery attempts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Liability and Claims</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Carrier Liability</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Our liability for loss or damage to freight is limited to the lesser of the actual value of the goods or $100,000 per shipment, unless additional cargo insurance is purchased. We are not liable for damage caused by improper packaging, acts of God, or circumstances beyond our control.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.2 Filing Claims</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  All claims for loss or damage must be filed in writing within nine (9) months of the delivery date or scheduled delivery date. Claims must include documentation of the loss or damage, proof of value, and the original bill of lading.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">5.3 Limitation of Liability</h3>
                <p className="text-foreground/80 leading-relaxed">
                  IN NO EVENT SHALL ACCOUPOINT TRUCKING BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OUR SERVICES.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Insurance</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We maintain cargo insurance coverage as required by federal regulations. Customers are encouraged to purchase additional cargo insurance for high-value shipments. We can provide information about additional insurance options upon request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cancellation and Refunds</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Shipments may be cancelled without charge if notice is provided at least 24 hours before the scheduled pickup time. Cancellations made with less than 24 hours notice may be subject to a cancellation fee. Once freight has been picked up, cancellation is not possible and the full shipping charge applies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. User Representations</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  By using our website and services, you represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>All information you provide is truthful and accurate</li>
                  <li>You have the legal capacity to enter into these Terms</li>
                  <li>You are authorized to ship the freight you tender to us</li>
                  <li>The freight complies with all applicable laws and regulations</li>
                  <li>You will not use our services for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Intellectual Property</h2>
                <p className="text-foreground/80 leading-relaxed">
                  The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, and the design) are owned by ACCOUPOINT TRUCKING and are protected by United States and international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
                <p className="text-foreground/80 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless ACCOUPOINT TRUCKING and its officers, directors, employees, contractors, agents, licensors, and suppliers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Force Majeure</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We shall not be liable for any failure or delay in performing our obligations where such failure or delay results from any cause beyond our reasonable control, including but not limited to: acts of God, natural disasters, weather conditions, war, terrorism, strikes, labor disputes, government actions, epidemics, or road closures.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Governing Law and Jurisdiction</h2>
                <p className="text-foreground/80 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Alaska, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Anchorage, Alaska, and the parties hereby consent to personal jurisdiction and venue therein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Dispute Resolution</h2>
                <p className="text-foreground/80 leading-relaxed">
                  Any dispute arising out of or relating to these Terms or our services shall first be attempted to be resolved through good-faith negotiations. If the dispute cannot be resolved through negotiation within 30 days, either party may pursue legal remedies as provided herein.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Severability</h2>
                <p className="text-foreground/80 leading-relaxed">
                  If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid, illegal, or unenforceable provision shall be replaced with a valid provision that most closely reflects the intent of the original provision.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Changes to Terms</h2>
                <p className="text-foreground/80 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">16. Contact Information</h2>
                <p className="text-foreground/80 leading-relaxed">
                  For questions about these Terms, please contact us:
                </p>
                <div className="mt-4 text-foreground/80">
                  <p><strong>ACCOUPOINT TRUCKING</strong></p>
                  <p>7125 Old Seward Hwy Ste 1</p>
                  <p>Anchorage, AK 99518</p>
                  <p>Phone: +1 862 268-9213</p>
                  <p>Email: info@accupointruck.com</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsConditions;
