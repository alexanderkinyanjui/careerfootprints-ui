export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-primary-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-4">
              CareerFootprints
            </h3>
            <p className="text-sm text-gray-600">
              Empowering students and professionals to make informed career decisions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-800">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/courses" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/assessment" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Career Assessment
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-800">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-primary-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary-800">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-100 mt-12 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CareerFootprints. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 