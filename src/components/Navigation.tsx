import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Simple, reliable mobile menu functionality
    if (typeof window !== 'undefined' && window.jQuery) {
      const $ = window.jQuery;
      
      // Wait for DOM to be ready
      $(document).ready(() => {
        // Remove any existing handlers
        $('.custom-hamburger-btn, .mobile-toggle').off('click.mobilemenu');
        
        // Add click handler
        $('.custom-hamburger-btn, .mobile-toggle').on('click.mobilemenu', function(e) {
          e.preventDefault();
          console.log('Hamburger clicked!'); // Debug log
          
          const $navBar = $('.nav-bar');
          const $moduleGroup = $('.module-group');
          const $hamburger = $('.custom-hamburger-btn');
          
          // Toggle classes
          $navBar.toggleClass('mobile-open');
          $hamburger.toggleClass('active');
          
          // Simple toggle - just show/hide
          if ($navBar.hasClass('mobile-open')) {
            $moduleGroup.slideDown(300);
          } else {
            $moduleGroup.slideUp(300);
          }
        });
      });
    }
  }, []);

  return (
    <div className="nav-container">
      <nav>
        <div className="nav-bar">
          <div className="module left">
            <Link to="/">
              <img className="logo logo-dark" alt="Globall" src="/globall.png" />
            </Link>
          </div>
          <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
            <button className="custom-hamburger-btn" type="button">
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
          <div className="module-group right">
            <div className="module left">
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Mission</Link></li>
                <li><Link to="/faqs">FAQ's</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;