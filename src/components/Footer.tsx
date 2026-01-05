import healingSaunaLogo from '@/assets/healing-sauna-logo-full.png';

const Footer = () => {
  return (
    <footer className="section-dark border-t border-white/10 py-12">
      <div className="container-section">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img 
                src={healingSaunaLogo} 
                alt="Healing Sauna" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm max-w-sm">
              Premium portable far-infrared saunas for recovery, detox, and wellness. 
              Experience professional-grade therapy at home.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="https://www.healingsauna.com/benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="https://store.healingsauna.com" className="hover:text-white transition-colors">The Sauna</a></li>
              <li><a href="https://www.healingsauna.com/research" className="hover:text-white transition-colors">Research</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="https://www.healingsauna.com/faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="https://www.healingsauna.com/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://www.healingsauna.com/returns" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="https://www.healingsauna.com/affiliates" className="hover:text-white transition-colors">Affiliates</a></li>
              <li><a href="https://www.healingsauna.com/track-package" className="hover:text-white transition-colors">Track Package</a></li>
              <li><a href="https://www.healingsauna.com/setup" className="hover:text-white transition-colors">Setup Guide</a></li>
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
