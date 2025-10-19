import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Initialize mobile menu functionality with jQuery when component mounts
    if (typeof window !== 'undefined' && window.jQuery) {
      const $ = window.jQuery;
      
      // Handle mobile menu toggle with new button
      $('.custom-hamburger-btn, .mobile-toggle').off('click').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.mobile-toggle').toggleClass('active');
        $('.custom-hamburger-btn').toggleClass('active');
        $('.nav-bar').toggleClass('mobile-open');
        $('.module-group').slideToggle(300);
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