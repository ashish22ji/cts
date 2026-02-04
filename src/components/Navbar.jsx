import { useState } from "react";
import navbarjson from "../data/navbar.json";
import CTA from "./CTA";
import contactData from "../data/contactData.json";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-primary text-white/90 shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top bar */}
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <h1 className="text-xl md:text-2xl font-bold text-white">
            {navbarjson.brand.name}
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              {navbarjson.menu.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  onClick={() => setActive(item.href)}
                  className={`font-medium transition-colors duration-200 ${
                    active === item.href
                      ? "text-white/80"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {navbarjson.cta.show && (
              <CTA
                text="Get Quote"
                variant="light"
                href={`https://wa.me/${contactData.phone}?text=${encodeURIComponent(
                  contactData.message
                )}`}
              />
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
            <span className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navbarjson.menu.map((item) => (
              <a
                key={item.href}
                href={`#${item.href}`}
                onClick={() => {
                  setActive(item.href);
                  setOpen(false);
                }}
                className="block py-2 font-medium hover:text-white/80"
              >
                {item.label}
              </a>
            ))}

            {navbarjson.cta.show && (
              <CTA
                text="Get Quote"
                variant="light"
                href={`https://wa.me/${contactData.phone}?text=${encodeURIComponent(
                  contactData.message
                )}`}
              />
            )}
          </div>
        )}
      </div>
    </header>
  );
}
