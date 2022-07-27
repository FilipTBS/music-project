export const Footer = () => {
    return (
        <><a
            className="banner"
            href="https://www.templatemonster.com/website-templates/monstroid2.html"
            target="_blank"
        >
            <img src="images/monstroid_big_02.jpg" alt="" height={0} />
        </a><footer className="section footer-2">
                <div className="container">
                    <div className="row row-40">
                        <div className="col-md-6 col-lg-3">
                            <a className="footer-logo" href="index.html">
                                <img
                                    src="images/logo-footer-360x52.png"
                                    alt=""
                                    width={180}
                                    height={26} />
                            </a>
                            <p>
                                OnWave is one of the most popular radio stations broadcasting the
                                best EDM &amp; Rock tracks, shows, and performances worldwide. We
                                were founded in 1999 to promote original Electronic, Jazz, and
                                Rock music.
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white title">Contact Information</h5>
                            <ul className="contact-box">
                                <li>
                                    <div className="unit unit-horizontal unit-spacing-xxs">
                                        <div className="unit-left">
                                            <span className="icon mdi mdi-map-marker accent-icon" />
                                        </div>
                                        <div className="unit-body">
                                            <a href="">
                                                2130 Fulton Street,{" "}
                                                <br className="veil reveal-lg-inline" />
                                                San Diego, CA 94117-1080 USA
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="unit unit-horizontal unit-spacing-xxs">
                                        <div className="unit-left">
                                            <span className="icon mdi mdi-phone accent-icon" />
                                        </div>
                                        <div className="unit-body">
                                            <ul className="list-phones">
                                                <li>
                                                    <a href="tel:#">1-800-1234-567</a>
                                                </li>
                                                <li>
                                                    <a href="tel:#">1-800-1234-567</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="unit unit-horizontal unit-spacing-xxs">
                                        <div className="unit-left">
                                            <span className="icon mdi mdi-email-outline accent-icon" />
                                        </div>
                                        <div className="unit-body">
                                            <a href="/mailto:#">info@demolink.org</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="group-md group-middle social-items">
                                <a className="icon icon-md novi-icon mdi mdi-facebook" href="" />
                                <a className="icon icon-md novi-icon mdi mdi-twitter" href="" />
                                <a
                                    className="icon icon-md novi-icon mdi mdi-instagram"
                                    href="" />
                                <a
                                    className="icon icon-md novi-icon mdi mdi-facebook-messenger"
                                    href="" />
                                <a className="icon icon-md novi-icon mdi mdi-linkedin" href="" />
                                <a className="icon icon-md novi-icon mdi mdi-snapchat" href="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="title">Gallery</h5>
                            <ul
                                className="instafeed instagram-gallery"
                                data-lightgallery="group"
                            >
                                <li>
                                    <a
                                        className="instagram-item"
                                        data-lightgallery="item"
                                        href="images/insta-gallery-1-1200x800-original.jpg"
                                    >
                                        <img
                                            src="images/insta-gallery-1-72x72.jpg"
                                            alt=""
                                            width={72}
                                            height={72} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram-item"
                                        data-lightgallery="item"
                                        href="images/insta-gallery-2-1200x800-original.jpg"
                                    >
                                        <img
                                            src="images/insta-gallery-2-72x72.jpg"
                                            alt=""
                                            width={72}
                                            height={72} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram-item"
                                        data-lightgallery="item"
                                        href="images/insta-gallery-3-1200x800-original.jpg"
                                    >
                                        <img
                                            src="images/insta-gallery-3-72x72.jpg"
                                            alt=""
                                            width={72}
                                            height={72} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram-item"
                                        data-lightgallery="item"
                                        href="images/insta-gallery-4-1200x800-original.jpg"
                                    >
                                        <img
                                            src="images/insta-gallery-4-72x72.jpg"
                                            alt=""
                                            width={72}
                                            height={72} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram-item"
                                        data-lightgallery="item"
                                        href="images/insta-gallery-5-1200x800-original.jpg"
                                    >
                                        <img
                                            src="images/insta-gallery-5-72x72.jpg"
                                            alt=""
                                            width={72}
                                            height={72} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram-item"
                                        data-lightgallery="item"
                                        href="images/insta-gallery-6-1200x800-original.jpg"
                                    >
                                        <img
                                            src="images/insta-gallery-6-72x72.jpg"
                                            alt=""
                                            width={72}
                                            height={72} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h5 className="text-white title">Newsletter</h5>
                            <p>
                                Keep up with our always upcoming news and updates. Enter your
                                e-mail and subscribe to our newsletter.
                            </p>
                            {/* RD Mailform*/}
                            <form
                                className="rd-form form-sm rd-mailform"
                                data-form-output="form-output-global"
                                data-form-type="contact"
                                method="post"
                                action="bat/rd-mailform.php"
                            >
                                <div className="form-wrap">
                                    <input
                                        className="form-input"
                                        id="newsletter-email"
                                        type="email"
                                        name="email"
                                        data-constraints="@Email @Required" />
                                    <label className="form-label" htmlFor="newsletter-email">
                                        Enter your e-mail
                                    </label>
                                </div>
                                <button className="button button-primary" type="submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Rights*/}
                    <p className="rights">
                        <span>©&nbsp;</span>
                        <span className="copyright-year" /> <span>OnWave</span>. All Rights
                        Reserved. Design by{" "}
                        <a href="https://www.templatemonster.com">TemplateMonster</a>
                    </p>
                </div>
            </footer></>
    );
}