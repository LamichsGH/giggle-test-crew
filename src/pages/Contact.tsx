import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  useEffect(() => {
    // Reinitialize all scripts when component mounts
    if (typeof window !== 'undefined') {
      // Initialize AOS
      if (window.AOS) {
        window.AOS.init({ duration: 800, once: true, offset: 100 });
      }
      
      // Reinitialize any parallax or background image scripts
      if (window.jQuery) {
        // Force refresh of background images and parallax
        window.jQuery(document).ready(() => {
          // Trigger any background image handlers
          window.jQuery('.background-image-holder').each(function() {
            const img = window.jQuery(this).find('.background-image');
            if (img.length) {
              const src = img.attr('src');
              if (src) {
                window.jQuery(this).css('background-image', 'url(' + src + ')');
              }
            }
          });
        });
      }
    }
  }, []);

  return (
    <div className="scroll-assist">
      <Navigation />
      
      <div className="main-container">
        <section className="fullscreen image-bg" data-aos="fade-up">
          <div className="background-image-holder">
            <img alt="image" className="background-image" src="/contact.jpg" />
          </div>
          <div className="container v-align-transform">
            <div className="row">
              <div className="col-sm-12 text-center" data-aos="fade-up">
                <img alt="Pic" src="/contact.png" data-aos="fade-up" data-aos-delay="200" />
                <h5 className="mb20 mb-xs-16 large" data-aos="fade-up" data-aos-delay="300">
                  If you have any questions or need to contact us, please email;
                </h5>
                <h4 data-aos="fade-up" data-aos-delay="400">
                  <a href="mailto:enquiries@globall.uk">enquiries@globall.uk</a>
                </h4>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;