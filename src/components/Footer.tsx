
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">MediCare+</h3>
            <p className="text-gray-400">
              Your trusted online pharmacy delivering quality medicines and healthcare products to your doorstep.
            </p>
            <div className="text-sm text-gray-400">
              <p>📞 1800-XXX-XXXX</p>
              <p>✉️ support@medicare.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Prescription Drugs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">OTC Medicines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Supplements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Personal Care</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Order by Prescription</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Delivery</a></li>
              <li><a href="#" className="hover:text-white transition-colors">24/7 Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Checkups</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MediCare+. All rights reserved. | Licensed Pharmacy | ISO Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
