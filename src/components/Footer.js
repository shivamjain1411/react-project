import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">BUSINESS REGISTRATION</h3>
          <ul className="space-y-2">
            <li>Pvt Ltd Company Registration</li>
            <li>OPC Registration</li>
            <li>LLP Registration</li>
            <li>Partnership Registration</li>
            <li>Startup India Registration</li>
            <li>Nidhi Company Registration</li>
            <li>NGO Registration</li>
          </ul>
          <h3 className="font-bold mt-6 mb-4">GST PORTAL</h3>
          <ul className="space-y-2">
            <li>GST Registration</li>
            <li>GST Return Filing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">LEGAL REGISTRATION</h3>
          <ul className="space-y-2">
            <li>MSME Registration</li>
            <li>IEC Code Registration</li>
            <li>FSSAI Registration</li>
            <li>Shop Registration</li>
            <li>Trademark</li>
            <li>Patent Registration</li>
            <li>ESI Registration</li>
            <li>PF Registration</li>
            <li>IRDAI Registration</li>
            <li>ISO Certification</li>
            <li>BIS Registration</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">ANNUAL SERVICE</h3>
          <ul className="space-y-2">
            <li>Company Annual Filing</li>
            <li>LLP Annual Filing</li>
            <li>Income Tax Return</li>
            <li>TDS Return</li>
          </ul>
          <h3 className="font-bold mt-6 mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li>Term & Condition</li>
            <li>Refund Policy</li>
            <li>Private Policy</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">WE SECURELY ACCEPT</h3>
          <div className="flex space-x-2 mb-6">
            <img
              src="/path-to-mastercard-icon.png"
              alt="Mastercard"
              className="h-8"
            />
            <img src="/path-to-visa-icon.png" alt="Visa" className="h-8" />
            <img src="/path-to-amex-icon.png" alt="Amex" className="h-8" />
            <img
              src="/path-to-netbanking-icon.png"
              alt="Net Banking"
              className="h-8"
            />
            <img src="/path-to-upi-icon.png" alt="UPI" className="h-8" />
            <img
              src="/path-to-freecharge-icon.png"
              alt="Freecharge"
              className="h-8"
            />
          </div>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-white hover:text-blue-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-blue-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-green-400">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <p className="text-xl">8851505094</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
