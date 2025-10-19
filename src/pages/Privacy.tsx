import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Privacy = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({ duration: 800, once: true, offset: 100 });
    }
  }, []);

  return (
    <div className="scroll-assist">
      <Navigation />
      
      <div className="main-container">
        <section className="fullscreen image-bg" data-aos="fade-up">
          <div className="background-image-holder">
            <img alt="image" className="background-image" src="/privacy.jpg" />
          </div>
          <div className="container v-align-transform">
            <div className="row">
              <div className="col-sm-12 text-center" data-aos="fade-up">
                <img alt="Privacy" src="/privacy.png" data-aos="fade-up" data-aos-delay="200" />
                <h1 className="large bold uppercase mb40 mb-xs-16" data-aos="fade-up" data-aos-delay="300">
                  Privacy Policy
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 text-left">
                <h2 className="large bold uppercase mb40 mb-xs-16" data-aos="fade-up" data-aos-delay="100">Our Privacy Policy</h2>
                <p className="lead">
                  GLO-BALL is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                </p>
                
                <h3 className="bold uppercase mb20 mb-xs-16" data-aos="fade-up" data-aos-delay="200">Information We Collect</h3>
                <p className="lead">
                  We may collect information you provide directly to us, such as when you contact us via email or through our contact forms. This may include your name, email address, and any message content you choose to share.
                </p>
                
                <h3 className="bold uppercase mb20 mb-xs-16" data-aos="fade-up" data-aos-delay="300">How We Use Information</h3>
                <p className="lead">
                  We use the information we collect to respond to your inquiries, provide information about our programs, and communicate with you about GLO-BALL's mission and activities.
                </p>
                
                <h3 className="bold uppercase mb20 mb-xs-16" data-aos="fade-up" data-aos-delay="400">Information Sharing</h3>
                <p className="lead">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except as described in this policy or as required by law.
                </p>
                
                <h3 className="bold uppercase mb20 mb-xs-16" data-aos="fade-up" data-aos-delay="500">Contact Us</h3>
                <p className="lead">
                  If you have questions about this Privacy Policy, please contact us at <a href="mailto:enquiries@globall.uk">enquiries@globall.uk</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Privacy;