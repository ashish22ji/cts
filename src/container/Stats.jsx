import statsData from "../data/stats.json";
import Container from "../layout/Container";
import Card from "../components/Card";

// ServicesSection.jsx
export default function Stats() {
  return (
       <Container
  id={"stats"}     
  title="Our Services"
  subtitle="Smart logistics tailored for your business"
  data={statsData}
  columns={4}
  spacing="medium"
  bg="bg-container-even"  // container bg color
  renderItem={(item) => (
    <Card
      title={item.label}
      description={item.description}
      meta={item.number}
      image={item.icon}
      color={item.color} // card color
      view="stats"
    />
  )}
/>
  );
}
