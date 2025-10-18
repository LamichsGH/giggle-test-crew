import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="fullscreen image-bg">
        <div className="background-image-holder">
          <img alt="image" className="background-image" src="/img/index.jpg" />
        </div>
        <div className="container v-align-transform">
          <div className="row">
            <div className="col-sm-12 text-center">
              <img alt="Pic" src="/img/index.png" />
              <h5 className="large bold mb40 mb-xs-16">
                We travel to communities globally where children face extreme poverty, conflict, & social
                challenges, using football as a tool
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="image-bg parallax pt240 pb180 pt-xs-80 pb-xs-80">
        <div className="background-image-holder">
          <img alt="image" className="background-image" src="/img/globall1.jpg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1 text-center">
              <h1 className="large bold uppercase mb50 mb-xs-16">MISSION</h1>
              <p className="lead mb48 mb-xs-32">
                We travel to communities globally where children face extreme poverty, conflict, & social
                challenges, using football as a tool
              </p>
              <Link className="btn-lg btn" to="/about">
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="image-bg parallax pt240 pb180 pt-xs-80 pb-xs-80">
        <div className="background-image-holder">
          <img alt="image" className="background-image" src="/img/globall2.jpg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1 text-center">
              <h1 className="large bold uppercase mb40 mb-xs-16">DONATE</h1>
              <p className="lead mb48 mb-xs-32">To find out how to donate to GLO-BAL, contact us today</p>
              <Link className="btn-lg btn" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="image-bg parallax pt240 pb180 pt-xs-80 pb-xs-80">
        <div className="background-image-holder">
          <img alt="image" className="background-image" src="/img/glo1.jpg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1 text-center">
              <h1 className="large bold uppercase mb40 mb-xs-16">Follow Us</h1>
              <a href="https://www.instagram.com/globalluk/">
                <img className="image-xs" alt="" src="/img/insta.png" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
