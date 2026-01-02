import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface FormEmailRequest {
  formType: "contact" | "quote" | "sms-consent";
  formData: Record<string, any>;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, formData }: FormEmailRequest = await req.json();
    
    let subject: string;
    let htmlContent: string;

    switch (formType) {
      case "contact":
        subject = "New Contact Form Submission - ACCOUPOINT TRUCKING";
        htmlContent = `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${formData.name || "N/A"}</p>
          <p><strong>Email:</strong> ${formData.email || "N/A"}</p>
          <p><strong>Phone:</strong> ${formData.phone || "N/A"}</p>
          <p><strong>Company:</strong> ${formData.company || "N/A"}</p>
          <p><strong>Service Type:</strong> ${formData.serviceType || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message || "N/A"}</p>
        `;
        break;

      case "quote":
        subject = "New Quote Request - ACCOUPOINT TRUCKING";
        htmlContent = `
          <h1>New Quote Request</h1>
          
          <h2>Contact Information</h2>
          <p><strong>Name:</strong> ${formData.name || "N/A"}</p>
          <p><strong>Email:</strong> ${formData.email || "N/A"}</p>
          <p><strong>Phone:</strong> ${formData.phone || "N/A"}</p>
          <p><strong>Company:</strong> ${formData.company || "N/A"}</p>
          
          <h2>Pickup Details</h2>
          <p><strong>Address:</strong> ${formData.pickupAddress || "N/A"}</p>
          <p><strong>City:</strong> ${formData.pickupCity || "N/A"}</p>
          <p><strong>State:</strong> ${formData.pickupState || "N/A"}</p>
          <p><strong>ZIP:</strong> ${formData.pickupZip || "N/A"}</p>
          <p><strong>Date:</strong> ${formData.pickupDate || "N/A"}</p>
          
          <h2>Delivery Details</h2>
          <p><strong>Address:</strong> ${formData.deliveryAddress || "N/A"}</p>
          <p><strong>City:</strong> ${formData.deliveryCity || "N/A"}</p>
          <p><strong>State:</strong> ${formData.deliveryState || "N/A"}</p>
          <p><strong>ZIP:</strong> ${formData.deliveryZip || "N/A"}</p>
          <p><strong>Date:</strong> ${formData.deliveryDate || "N/A"}</p>
          
          <h2>Shipment Details</h2>
          <p><strong>Service Type:</strong> ${formData.serviceType || "N/A"}</p>
          <p><strong>Freight Type:</strong> ${formData.freightType || "N/A"}</p>
          <p><strong>Weight:</strong> ${formData.weight || "N/A"} lbs</p>
          <p><strong>Dimensions:</strong> ${formData.dimensions || "N/A"}</p>
          <p><strong>Special Requirements:</strong></p>
          <p>${formData.specialRequirements || "None"}</p>
        `;
        break;

      case "sms-consent":
        subject = "New SMS Consent Subscription - ACCOUPOINT TRUCKING";
        htmlContent = `
          <h1>New SMS Consent Subscription</h1>
          <p><strong>Full Name:</strong> ${formData.fullName || "N/A"}</p>
          <p><strong>Mobile Number:</strong> ${formData.mobileNumber || "N/A"}</p>
          <p><strong>Municipality:</strong> ${formData.municipality || "N/A"}</p>
          <p><strong>SMS Consent:</strong> ${formData.smsConsent ? "Yes" : "No"}</p>
        `;
        break;

      default:
        throw new Error("Invalid form type");
    }

    const emailResponse = await resend.emails.send({
      from: "ACCOUPOINT TRUCKING <onboarding@resend.dev>",
      to: ["info@accupointruck.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-form-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
