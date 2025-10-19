import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Terms = () => {
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
            <img alt="image" className="background-image" src="/terms.jpg" />
          </div>
          <div className="container v-align-transform">
            <div className="row">
              <div className="col-sm-12 text-center" data-aos="fade-up">
                <img alt="Terms" src="/terms.png" data-aos="fade-up" data-aos-delay="200" />
                <h1 className="large bold uppercase mb40 mb-xs-16" data-aos="fade-up" data-aos-delay="300">
                  Site Terms
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1 text-left">
                <h2 className="large bold uppercase mb40 mb-xs-16" data-aos="fade-up" data-aos-delay="100">Terms of Use</h2>
                <p className="lead">
                  Welcome to GLO-BALL's website. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <h3 className="bold uppercase mb20 mb-xs-16" data-aos="fade-up" data-aos-delay="200">Use License</h3>
                <p className="lead">
                  Permission is granted to temporarily download one copy of the materials on GLO-BALL's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                
                <h3 className="bold uppercase mb20 mb-xs-16" data-aos="fade-up" data-aos-delay="300">Disclaimer</h3>
                <p className="lead">
                  The materials on GLO-BALL's website are provided on an 'as is' basis. GLO-BALL makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h3 className="bold uppercase mb20 mb-xs-16" data-aos="fade-up" data-aos-delay="400">Contact Information</h3>
                <p className="lead">
                  If you have any questions about these Terms, please contact us at <a href="mailto:enquiries@globall.uk">enquiries@globall.uk</a>
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

export default Terms;