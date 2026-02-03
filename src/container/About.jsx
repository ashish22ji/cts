import CTA from "../components/CTA";
import Container from "../layout/Container";
import Card from "../components/Card";
import aboutData from "../data/About.json";
import contactData from "../data/contactData.json";

export default function About() {
  return (
    <Container
      id="about"
      padding="medium"
      gap="large"
      bg="bg-container"
      columns={2}
      className="items-center bg-container-even"
    >
      {/* Left Image */}
      <div className="relative">
        <img
          src="/vehicle-images/Packers-And-Movers.jpg"
          alt="Logistics & Transport Services"
          className="rounded-3xl shadow-lg w-full object-cover"
        />

        <div className="absolute w-fit -right-6 -bottom-6 btn btn-primary shadow-lg hidden md:block">
          <p className="text-2xl font-bold">10+ Years</p>
          <p className="text-sm">Industry Experience</p>
        </div>
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          About Our Logistics Company
        </h2>

        <p className="text-muted mb-4 leading-relaxed">
          We are a trusted logistics and transportation company delivering
          reliable, fast, and cost-effective cargo solutions across India. From
          local deliveries to long-haul transportation, we ensure your goods
          move safely and on time.
        </p>

        <p className="text-muted mb-6 leading-relaxed">
          Our modern fleet, experienced drivers, and real-time tracking systems
          allow us to provide seamless logistics services tailored to your
          business needs.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-6 mb-8 ">
          {aboutData.map((item) => (
            <Card title={item.label} meta={item.value} view="stats" />
          ))}
        </div>

        <CTA
          text="Contact Us"
          target="_blank"
          href={`https://wa.me/${contactData.phone}?text=${encodeURIComponent(contactData.message)}`}
        />
      </div>
    </Container>
  );
}
