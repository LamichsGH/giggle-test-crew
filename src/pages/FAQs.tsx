import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQs = () => {
  useEffect(() => {
    // Reinitialize all scripts when component mounts
    if (typeof window !== 'undefined') {
      // Initialize AOS
      if (window.AOS) {
        window.AOS.init({ duration: 800, once: true, offset: 100 });
      }
      
      // Reinitialize any parallax or background image scripts
      if (window.jQuery) {
        const $ = window.jQuery;
        
        // Force refresh of background images and parallax
        $(document).ready(() => {
          // Trigger any background image handlers
          $('.background-image-holder').each(function() {
            const img = $(this).find('.background-image');
            if (img.length) {
              const src = img.attr('src');
              if (src) {
                $(this).css('background-image', 'url(' + src + ')');
              }
            }
          });
          
          // Let the original theme scripts handle FAQ accordion functionality
          // Just ensure the background images are loaded properly
        });
      }
    }
    
    // No cleanup needed - using original theme functionality
  }, []);

  return (
    <div className="scroll-assist">
      <Navigation />
      
      <div className="main-container">
        <section className="fullscreen image-bg">
          <div className="background-image-holder">
            <img alt="image" className="background-image" src="/globall2.jpg" />
          </div>
          <div className="container v-align-transform">
            <div className="row">
              <div className="col-sm-12 text-center">
                <img alt="Pic" src="/questions.png" />
                <h5 className="large bold mb40 mb-xs-16">   </h5>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="large bold uppercase mb40 mb-xs-16">FAQ's</h1>
                <h6 className="uppercase mb16"></h6>
                <h5></h5>
              </div>
            </div>
            
            <div className="row" data-aos="fade-up" data-aos-delay="200">
              <div className="col-sm-10 col-sm-offset-1">
                <ul className="accordion accordion-2 one-open">
                  <li data-aos="fade-up" data-aos-delay="100">
                    <div className="title">
                      <h4 className="bold uppercase mb10 mb-xs-16">What is Globall?</h4>
                    </div>
                    <div className="content">
                      <h5>
                        Here at GLO-BALL, we believe in the magic of a single football, the power it has to bring joy, unite communities, and inspire hope. In the world's most deprived areas, where opportunities are scarce but dreams are limitless, we use football as a bridge to connect, uplift, and empower underprivileged children. With just one ball, we spark laughter, friendship, and a sense of belonging, proving that even the simplest things can create the biggest impact.
                      </h5>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="200">
                    <div className="title">
                      <h4 className="bold uppercase mb10 mb-xs-16">How We Help?</h4>
                    </div>
                    <div className="content">
                      <h5>
                        Through football, we aim to break down barriers, foster friendships, and inspire children to believe in their potential. By providing access to the game, we create safe spaces where kids can play, grow, and develop essential life skills, regardless of their circumstances.
                      </h5>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <div className="title">
                      <h4 className="bold uppercase mb10 mb-xs-16">Sponsor Us?</h4>
                    </div>
                    <div className="content">
                      <h5>
                        GLO-BALL offers organizations the opportunity to make a tangible social impact through the universal language of football. By becoming a sponsor, your brand will directly support programs that provide underprivileged children with access to football, safe community spaces, and initiatives that promote mental well-being. Sponsorship packages are tailored to align with your company's corporate social responsibility goals, while ensuring visibility and recognition for your contribution. Together, we can empower the next generation with one ball, one community, one future at a time.
                      </h5>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="400">
                    <div className="title">
                      <h4 className="bold uppercase mb10 mb-xs-16">Get Involved?</h4>
                    </div>
                    <div className="content">
                      <h5>
                        Whether you're a coach, creative, mentor, or simply someone who believes in the unifying power of football, there's a place for you in our team. To get involved, simply complete our online application form or reach out to our partnerships team. From volunteering at events to serving as a community ambassador, you'll play a vital role in helping us deliver hope, unity, and opportunity to children around the world.
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="image-bg parallax pt240 pb180 pt-xs-80 pb-xs-80" data-aos="fade-up">
          <div className="background-image-holder">
            <img alt="image" className="background-image" src="/glo4.jpg" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-md-offset-1 text-center">
                <h1 className="large bold uppercase mb50 mb-xs-16">OUR MISSION</h1>
                <p className="lead mb48 mb-xs-32">
                  We travel to communities globally where children face extreme poverty, conflict, & social challenges, using football as a tool
                </p>
                <a className="btn-lg btn" href="/about">View More</a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default FAQs;