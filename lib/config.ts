export const _siteDetails = {
  name: "Clean Attitude",
  domain: process.env.NODE_ENV === "development" ? "localhost:3000" : "cleanattitude.com.ng",
  desc: "Professional cleaning company in Nigeria",
  menuLinks: [
    { label: "Our Services", link: "/#services" },
    { label: "About Us", link: "/#about-us" },
    { label: "Book Now", link: "whatsapp://send?phone=2349019704477&text=Hello%20I%20am%20interested%20in%20your%20cleaning%20services", extra: true },
    
  ],
  
};
