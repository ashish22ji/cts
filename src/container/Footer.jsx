import Container from "../layout/Container";
import contactData from "../data/contactData.json";
import mapIcon from "../assets/map-icon.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container spacing="normal" columns={3} className="text-left items-start" gap="medium">
        {/* Column 1 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-extrabold tracking-tight leading-snug">{contactData.companyName}</h3>
          <p className="text-base text-white/90 max-w-sm">
            Reliable logistics and transport solutions across India.
          </p>

          {/* Social Icons (SVG) */}
{/* Social Icons */}
<div className="flex gap-3 pt-1">
  {/* Facebook */}
  <a
    href={contactData.facebook}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12z"/>
    </svg>
  </a>

  {/* Instagram */}
<a
  href={contactData.Insta}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/>
  </svg>
</a>

  {/* LinkedIn */}
  <a
    href={contactData.linkedIn}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1 5H3v14h2V8zm7 0h-2v14h2v-7c0-1.9 1.3-3 3-3 1.6 0 2.7 1 2.7 3v7h2V12c0-3.6-1.9-5-4.6-5-2.2 0-3.1 1.2-3.4 2.1V8z"/>
    </svg>
  </a>


  {/* Twitter */}
  <a
    href={contactData.twitter}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Twitter"
    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.8c-.8.4-1.6.6-2.5.8a4.2 4.2 0 0 0 1.8-2.3c-.8.5-1.7.9-2.6 1.1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3 4.8a4 4 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.8-.5v.1a4.1 4.1 0 0 0 3.3 4c-.6.2-1.2.2-1.8.1.5 1.5 2 2.5 3.7 2.5A8.2 8.2 0 0 1 2 18.2a11.6 11.6 0 0 0 6.3 1.8c7.6 0 11.8-6.3 11.8-11.8v-.6c.8-.6 1.5-1.3 2-2.2z"/>
    </svg>
  </a>
</div>

        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1">
          <h4 className="text-base font-bold uppercase tracking-wider text-white/70 mb-2">Services</h4>
          <p className="text-base text-white/90">Local Deliveries</p>
          <p className="text-base text-white/90">Long Haul Transport</p>
          <p className="text-base text-white/90">Cold Chain Logistics</p>
        </div>

        {/* Column 3 */}
<div className="flex flex-col gap-2">
  <h4 className="text-base font-bold uppercase tracking-wider text-white/70 mb-2">Contact</h4>

  {/* Address (clickable for Google Maps) */}
  <p className="text-base text-white/90 flex items-center gap-2">
    {/* Location Icon */}
    <img src={mapIcon} className="h-6 w-6" alt="Location" />
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${contactData.office.area}, ${contactData.office.city}, ${contactData.office.pin}, India`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 hover:text-white hover:translate-x-1"
    >
      {contactData.office.area}, {contactData.office.city}, {contactData.office.pin}, India
    </a>
  </p>


  {/* Phone Numbers */}
  <p className="text-base text-white/90 flex items-center gap-2">
   <svg
  className="w-6 h-6 text-[#1DA851] rounded-full bg-white/80 p-px"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1v3.61a1 1 0 01-1 1A16.94 16.94 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.2 2.2z" />
</svg>

    <a
      href={`tel:+${contactData.phone}`}
      className="inline-flex items-center gap-1 transition-all duration-300 hover:text-white hover:translate-x-1"
    >
      +{contactData.phone}
    </a>
    {contactData.phone2 && (
      <>
        {" , "}
        <a
          href={`tel:+${contactData.phone2}`}
          className="inline-flex items-center gap-1 transition-all duration-300 hover:text-white hover:translate-x-1"
        >
          +{contactData.phone2}
        </a>
      </>
    )}
  </p>

  {/* Email */}
  <p className="text-base text-white/90 flex flex-row">
    <div className="text-xl mr-1">✉</div>
    <a
      href={`mailto:${contactData.email}`}
      className="inline-flex items-center gap-1 transition-all duration-300 hover:text-white hover:translate-x-1"
    >
      {contactData.email}
    </a>
  </p>
</div>

      </Container>

      <div className="border-t border-white/20">
        <Container spacing="small" columns={1}>
          <div className="text-center text-sm text-white/80">
            © {new Date().getFullYear()} CTS. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
}
