export const RadioShows = () => {
    return (
        <section className="section section-lg bg-gray-100">
        <div className="container text-center">
          <h2>Schedule of Radio Shows</h2>
          <p>
            Our radio has more than 20 radio shows aired weekly. They include
            exclusive guest mixes,live
            <br className="d-none d-lg-block" />
            performances, interviews, and appearances by world-famous DJs and
            musicians
          </p>
          <div className="row row-30 row-offset-4 text-left">
            <div className="col-md-6 col-lg-4 wow fadeInRight">
              <article className="post-boxed">
                <div className="post-meta">
                  <div className="post-meta-item">
                    <div className="post-author">
                      <span>by</span> <a href="">Leona Burns</a>
                    </div>
                  </div>
                  <div className="post-meta-item">
                    <div className="post-date">07:00am – 10:00am</div>
                  </div>
                </div>
                <a className="media-wrapper" href="">
                  <img
                    src="images/latest-blog-post-1-370x272.jpg"
                    alt=""
                    width={370}
                    height={272}
                  />
                </a>
                <div className="post-body">
                  <ul className="list-tags">
                    <li>
                      <a className="tag-1" href="">
                        Program
                      </a>
                    </li>
                  </ul>
                  <h6 className="post-title">
                    <a href="">OnWave Morning Time with Leona Burns</a>
                  </h6>
                  <p className="post-exeption">
                    Leona Burns is ready to charge up your morning with great EDM
                    &amp; Rock music! Tune in to OnWave to get your dose of
                    morning fun with trending hits and the latest news.
                  </p>
                </div>
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <article className="post-boxed">
                <div className="post-meta">
                  <div className="post-meta-item">
                    <div className="post-author">
                      <span>by</span> <a href="">Martha Ryan</a>
                    </div>
                  </div>
                  <div className="post-meta-item">
                    <div className="post-date">10:00am – 12:00am</div>
                  </div>
                </div>
                <a className="media-wrapper" href="">
                  <img
                    src="images/latest-blog-post-2-370x272.jpg"
                    alt=""
                    width={370}
                    height={272}
                  />
                </a>
                <div className="post-body">
                  <ul className="list-tags">
                    <li>
                      <a className="tag-1" href="">
                        Interview
                      </a>
                    </li>
                  </ul>
                  <h6 className="post-title">
                    <a href="">
                      Up in the Air with Martha Ryan (Special Guest: Ray Johnson)
                    </a>
                  </h6>
                  <p className="post-exeption">
                    On Saturday, Ray Johnson, a renowned DJ and musician will
                    visit Martha Ryan’s show “Up in the Air” to answer some tricky
                    questions about his career and personal life.
                  </p>
                </div>
              </article>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <article className="post-boxed">
                <div className="post-meta">
                  <div className="post-meta-item">
                    <div className="post-author">
                      <span>by</span> <a href="">Martha Ryan</a>
                    </div>
                  </div>
                  <div className="post-meta-item">
                    <div className="post-date">12:00am – 03:00pm</div>
                  </div>
                </div>
                <a className="media-wrapper" href="">
                  <img
                    src="images/latest-blog-post-3-370x272.jpg"
                    alt=""
                    width={370}
                    height={272}
                  />
                </a>
                <div className="post-body">
                  <ul className="list-tags">
                    <li>
                      <a className="tag-1" href="">
                        Live
                      </a>
                    </li>
                  </ul>
                  <h6 className="post-title">
                    <a href="">
                      Pixie Lott and The Rollers (Live at Rush Club, May 2018)
                    </a>
                  </h6>
                  <p className="post-exeption">
                    This weekend’s live concert features an incredible performance
                    by Pixie Lott and her group The Rollers at Rush Club in
                    Seattle, WA, which took place on May 28, 2018.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="button-wrap-lg">
            <a className="button button-lg button-primary" href="">
              View All Schedule
            </a>
          </div>
        </div>
      </section>

    );
}