import logo from "../../assets/logos/company_logo.png";

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home">
              <img
                src={logo}
                alt="Hello Expansion Logo"
                className="h-25 w-auto object-contain" // Proportional sizing
              />
            </a>
            <p className="text-sm text-gray-500">
              Copyright © 2024 Hello Expansion. <br /> All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-sm font-medium text-gray-600">
            <a href="#hero" className="hover:text-[#0E1A54] transition-colors">
              Produkt
            </a>
            <a href="#steps" className="hover:text-[#0E1A54] transition-colors">
              Prozess
            </a>
            <a
              href="#review"
              className="hover:text-[#0E1A54] transition-colors"
            >
              Prüfung
            </a>
            <a href="#" className="hover:text-[#0E1A54] transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-[#0E1A54] transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
