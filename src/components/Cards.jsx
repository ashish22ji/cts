import Card from "./Card";

 export default function Cards() {
  return (
     <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-10">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <Card title="Holiday Packages" description="Custom tour plans at best prices."/>
            <Card title="Hotel Booking" description="Comfortable & affordable stays."/>
            <Card title="Flight Tickets" description="Quick and easy flight bookings."/>
          </div>
        </div>
      </section>
  )}