import servicesData from "../data/services.json";
import Container from "../layout/Container";
import Card from "../components/Card";

// ServicesSection.jsx
export default function Services() {
  return (
       <Container
       id="services"
  title="Our Services"
  subtitle="Smart logistics tailored for your business"
  data={servicesData}
  columns={3}
  spacing="medium"
  bg="bg-container"
  renderItem={(item) => (
    <Card
      title={item.title}
      description={item.description}
      image={item.icon}
      color={item.color}
    />
  )}
/>
  );
}
