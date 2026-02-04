import Container from "../layout/Container";
import contactData from "../data/contactData.json";
import mapIcon from "../assets/images/map-icon.png";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  PhoneIcon,
} from "../components/Icon";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container
        spacing="normal"
        columns={3}
        className="text-left items-start"
        gap="medium"
      >
        {/* Column 1 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-extrabold tracking-tight leading-snug">
            {contactData.companyName}
          </h3>
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
              <FacebookIcon />
            </a>

            {/* Instagram */}
            <a
              href={contactData.Insta}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <InstagramIcon />
            </a>

            {/* LinkedIn */}
            <a
              href={contactData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <LinkedInIcon />
            </a>

            {/* Twitter */}
            <a
              href={contactData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1">
          <h4 className="text-base font-bold uppercase tracking-wider text-white/70 mb-2">
            Services
          </h4>
          <p className="text-base text-white/90">Local Deliveries</p>
          <p className="text-base text-white/90">Long Haul Transport</p>
          <p className="text-base text-white/90">Cold Chain Logistics</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-bold uppercase tracking-wider text-white/70 mb-2">
            Contact
          </h4>

          {/* Address (clickable for Google Maps) */}
          <p className="text-base text-white/90 flex items-center gap-2">
            {/* Location Icon */}
            <img src={mapIcon} className="h-6 w-6" alt="Location" />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${contactData.office.area}, ${contactData.office.city}, ${contactData.office.pin}, India`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-white hover:translate-x-1"
            >
              {contactData.office.area}, {contactData.office.city},{" "}
              {contactData.office.pin}, India
            </a>
          </p>

          {/* Phone Numbers */}
          <p className="text-base text-white/90 flex items-center gap-2">
            <PhoneIcon className="text-[#1DA851] rounded-full bg-white/80 p-px" />
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
