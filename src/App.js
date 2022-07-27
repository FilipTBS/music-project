import {Navbar} from './components/Navbar';
import {Swiper} from './components/Swiper';
import {Player} from './components/Player';
import { MusicGenres } from './components/MusicGenres';
import { RadioShows } from './components/RadioShows';
import { WhyShouldILIsten } from './components/WhyShouldILIsten';
import { CallToAction } from './components/CallToAction';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
 <div> 
  <div className="ie-panel">
    <a href="http://windows.microsoft.com/en-US/internet-explorer/">
      <img
        src="images/ie8-panel/warning_bar_0000_us.jpg"
        height={42}
        width={820}
        alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."
      />
    </a>
  </div>
  <div className="preloader">
    <div className="preloader-body">
      <div className="cssload-container">
        <div className="cssload-speeding-wheel" />
      </div>
    </div>
  </div>
  <div className="page">
    {/* Page Header*/}
    <a
      className="banner banner-top"
      href="https://www.templatemonster.com/website-templates/monstroid2.html"
      target="_blank"
    >
      <img src="images/monstroid_02.jpg" alt="" height={0} />
    </a>
    <header className="section page-header">
      {/* RD Navbar*/}
    <Navbar/>
    </header>
    {/* Swiper*/}
    <Swiper/>
    {/*Player*/}
    <Player/>
    {/* Variety of Music Genres*/}
    <MusicGenres/>
    {/*	Schedule of Radio Shows*/}
    <RadioShows/>
    {/* Why You Should Listen to OnWave*/}
    <WhyShouldILIsten/>
    {/* Call to action*/}
    <CallToAction/>
    {/* Pricing*/}
    <Pricing/>
    {/* Page Footer*/}
    <Footer/>
  </div>
  {/* Global Mailform Output*/}
  <div className="snackbars" id="form-output-global" />
  </div>
</>
  );
}

export default App;
