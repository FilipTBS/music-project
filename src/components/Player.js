export const Player = () => {
    return (
        <section className="section section-xs bg-primary-gradient wave-pattern">
        <div className="container">
          <div className="shell">
            <div className="range range-xs-center">
              <div className="col-lg-12">
                <div className="jp-player-init">
                  <div className="jp-jplayer" />
                  <div
                    className="jp-audio jp-audio-7"
                    role="application"
                    aria-label="media player"
                  >
                    <ul className="jp-player-list">
                      <li
                        className="jp-player-list-item"
                        data-jp-title="The Stark Palace - "
                        data-jp-artist="CroMagnon Man"
                        data-jp-mp3="http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3"
                      />
                    </ul>
                    <div className="jp-interface">
                      <div className="jp-button jp-playpaus-button">
                        <button
                          className="jp-btn jp-play"
                          role="button"
                          tabIndex={7}
                        >
                          play
                        </button>
                      </div>
                      <div className="jp-time-rail">
                        <div className="jp-progress">
                          <div className="jp-seek-bar">
                            <div className="jp-play-bar" />
                          </div>
                        </div>
                      </div>
                      <div className="jp-button jp-volume-button">
                        <button
                          className="jp-btn jp-mute"
                          role="button"
                          tabIndex={7}
                        >
                          max volume
                        </button>
                      </div>
                      <div className="jp-volume-bar">
                        <div className="jp-volume-bar-value" />
                      </div>
                    </div>
                    <div className="jp-playlist">
                      <div className="playlist-in">
                        <ul>
                          <li>&nbsp;</li>
                        </ul>
                        <div className="jp-current-time" />
                        <div className="jp-no-solution">
                          <span>Update Required</span> To play the media you will
                          need to either update your browser to a recent version
                          or update your
                          <a
                            href="http://get.adobe.com/flashplayer/"
                            target="_blank"
                          >
                            {" "}
                            Flash plugin
                          </a>
                          .
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}