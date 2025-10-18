import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="fullscreen image-bg">
        <div className="background-image-holder">
          <img alt="image" className="background-image" src="/contact.jpg" />
        </div>
        <div className="container v-align-transform">
          <div className="row">
            <div className="col-sm-12 text-center">
              <img alt="Pic" src="/contact.png" />
              <h5 className="mb20 mb-xs-16 large">
                If you have any questions or need to contact us, please email;{" "}
              </h5>
              <h4>
                <a href="mailto:enquiries@globall.uk">enquiries@globall.uk </a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
