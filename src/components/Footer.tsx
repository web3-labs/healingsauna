const Footer = () => {
  return (
    <footer className="section-dark border-t border-white/10 py-12">
      <div className="container-section">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">HS</span>
              </div>
              <span className="text-white font-bold text-lg">
                Healing<span className="gradient-text">Sauna</span>™
              </span>
            </div>
            <p className="text-white/60 text-sm max-w-sm">
              Premium portable far-infrared saunas for recovery, detox, and wellness. 
              Experience professional-grade therapy at home.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Healing Sauna™. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/payment-icons.png?v=1586420047" 
              alt="Payment methods" 
              className="h-6 opacity-60"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
