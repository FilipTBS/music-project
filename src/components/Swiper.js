export const Swiper = () => {
    return (
        <section
        className="section swiper-container swiper-slider swiper-slider-2"
        data-loop="false"
        data-autoplay="false"
        data-simulate-touch="false"
        data-slide-effect="fade"
      >
        <div className="swiper-wrapper">
          <div
            className="swiper-slide context-dark"
            data-slide-bg="images/bg-1-1920x1000.jpg"
          >
            <div className="swiper-slide-caption">
              <div className="container">
                <div className="row justify-content-lg-left">
                  <div className="col-md-12 col-xl-10">
                    <h1 data-caption-animate="fadeInUp" data-caption-delay={100}>
                      Offering the Best Music to Listeners Worldwide
                    </h1>
                    <a
                      className="button button-lg button-primary"
                      href="about.html"
                      data-caption-animate="fadeInUp"
                      data-caption-delay={450}
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-meta">
          <ul className="links">
            <li>
              <a className="icon icon-meta mdi mdi-facebook" href="" />
            </li>
            <li>
              <a className="icon icon-meta mdi mdi-twitter" href="" />
            </li>
            <li>
              <a className="icon icon-meta mdi mdi-instagram" href="" />
            </li>
            <li>
              <a className="icon icon-meta mdi mdi-facebook-messenger" href="" />
            </li>
            <li>
              <a className="icon icon-meta mdi mdi-linkedin" href="" />
            </li>
            <li>
              <a className="icon icon-meta mdi mdi-snapchat" href="" />
            </li>
          </ul>
        </div>
      </section>
    );
}