import Container from "../layout/Container";
import CTA from "../components/CTA";
import contactData from "../data/contactData.json";

export default function ContactUs() {
  return (
    <Container
      id={"contact"}
      title="Ready To Plan Your Trip?"
      subtitle="Need transport or logistics support? We’re just one message away."
      spacing="medium"
      bg="bg-container"
      ctaProps={{
        text: "📞 Call Now",
        align: "center",
        target: "_blank",
        href: `https://wa.me/${contactData.phone}?text=${encodeURIComponent(contactData.message)}`,
      }}
      ctaProps2={{
        text: "💬 WhatsApp Us",
        align: "center",
        variant: "outline",
        target: "_blank",
        href: `https://wa.me/${contactData.phone}?text=${encodeURIComponent(contactData.message)}`,
      }}
    >
      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center gap-6 text-primary text-base">
        <span>✉ {contactData.email}</span>
        <span>📞 +{contactData.phone}</span>
      </div>
    </Container>
  );
}
