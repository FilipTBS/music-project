export const Navbar = () =>{
    return (
        <div className="rd-navbar-wrap rd-navbar-absolute">
        <nav
          className="rd-navbar rd-navbar-creative"
          data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed"
          data-md-layout="rd-navbar-fixed"
          data-md-device-layout="rd-navbar-fixed"
          data-lg-layout="rd-navbar-static"
          data-lg-device-layout="rd-navbar-static"
          data-xl-layout="rd-navbar-static"
          data-xl-device-layout="rd-navbar-static"
          data-lg-stick-up-offset="20px"
          data-xl-stick-up-offset="20px"
          data-xxl-stick-up-offset="20px"
          data-lg-stick-up="true"
          data-xl-stick-up="true"
          data-xxl-stick-up="true"
        >
          <div className="rd-navbar-main-outer">
            <div className="rd-navbar-main">
              {/* RD Navbar Panel*/}
              <div className="rd-navbar-panel">
                {/* RD Navbar Toggle*/}
                <button
                  className="rd-navbar-toggle"
                  data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                >
                  <span />
                </button>
                {/* RD Navbar Brand*/}
                <div className="rd-navbar-brand">
                  <a className="brand" href="index.html">
                    <img
                      src="images/logo-302x44.png"
                      alt=""
                      width={151}
                      height={22}
                    />
                  </a>
                </div>
              </div>
              <div className="rd-navbar-main-element">
                <div className="rd-navbar-nav-wrap">
                  {/* RD Navbar Nav*/}
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="typography.html">
                        Typography
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="contacts.html">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
                {/* RD Navbar Search*/}
                <div className="rd-navbar-search">
                  <button
                    className="rd-navbar-search-toggle rd-navbar-fixed-element-1"
                    data-rd-navbar-toggle=".rd-navbar-search"
                  >
                    <span />
                  </button>
                  <form className="rd-search" action="#" method="GET">
                    <div className="form-wrap">
                      <label
                        className="form-label"
                        htmlFor="rd-navbar-search-form-input"
                      >
                        Search
                      </label>
                      <input
                        className="rd-navbar-search-form-input form-input"
                        id="rd-navbar-search-form-input"
                        type="text"
                        name="s"
                        autoComplete="off"
                      />
                      <div
                        className="rd-search-results-live"
                        id="rd-search-results-live"
                      />
                    </div>
                    <button
                      className="rd-search-form-submit mdi mdi-magnify"
                      type="submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}