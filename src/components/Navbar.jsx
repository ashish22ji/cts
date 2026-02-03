import { useState } from "react";
import navbarjson from "../data/navbar.json";
import CTA from "./CTA";
import contactData from "../data/contactData.json"

export default function Navbar() {
  const [active, setActive] = useState("");

  return (
    <header className="w-full fixed top-0 left-0 bg-primary text-white/90 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-bold text-white">
          {navbarjson.brand.name}
        </h1>

        <div className="flex justify-between items-center space-x-6">
          <nav className="space-x-6 hidden md:block ">
            {navbarjson.menu.map((item) => (
              <a
                key={item.href}
                href={"#" + item.href}
                onClick={() => setActive(item.href)}
                className={`
                transition-colors duration-200 font-medium
                ${
                    active === item.href
                      ? "text-white/80"
                      : "text-white hover:text-white/80"
                  }
              `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {navbarjson.cta.show && <CTA text="Get Quote" variant="light" href= {`https://wa.me/${contactData.phone}?text=${encodeURIComponent(contactData.message)}`} />}
        </div>
      </div>
    </header>
  );
}
