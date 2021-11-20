import React from "react";

const PageContainer = () => {
  return (
    <div
      className="w3-container w3-content"
      style={{ maxWidth: "1400", marginTop: "80" }}
    >
      <div className="w3-row">
        <div className="w3-col m3">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container">
              <h4 className="w3-center">My Profile</h4>
              <p className="w3-center">
                <img
                  src="/w3images/avatar3.png"
                  className="w3-circle"
                  style={{ height: "106", width: "106" }}
                  alt="Avatar"
                ></img>
              </p>
              <hr />
              <p>
                <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>{" "}
                Designer, UI
              </p>
              <p>
                <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{" "}
                London, UK
              </p>
              <p>
                <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>{" "}
                April 1, 1988
              </p>
            </div>
          </div>
          <br />

          <div className="w3-card w3-round">
            <div className="w3-white">
              <button className="w3-button w3-block w3-theme-l1 w3-left-align">
                <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i>{" "}
                My Groups
              </button>
              <div id="Demo1" className="w3-hide w3-container">
                <p>Some text..</p>
              </div>
              <button className="w3-button w3-block w3-theme-l1 w3-left-align">
                <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>{" "}
                My Events
              </button>
              <div id="Demo2" className="w3-hide w3-container">
                <p>Some other text..</p>
              </div>
              <button className="w3-button w3-block w3-theme-l1 w3-left-align">
                <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
              </button>
              <div id="Demo3" className="w3-hide w3-container">
                <div className="w3-row-padding">
                  <br />
                  <div className="w3-half">
                    <img
                      src="/w3images/lights.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    ></img>
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/nature.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    ></img>
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/mountains.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    ></img>
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/forest.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    ></img>
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/nature.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    ></img>
                  </div>
                  <div className="w3-half">
                    <img
                      src="/w3images/snow.jpg"
                      style={{ width: "100%" }}
                      className="w3-margin-bottom"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
              <p>Interests</p>
              <p>
                <span className="w3-tag w3-small w3-theme-d5">News</span>
                <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>
                <span className="w3-tag w3-small w3-theme-d3">Labels</span>
                <span className="w3-tag w3-small w3-theme-d2">Games</span>
                <span className="w3-tag w3-small w3-theme-d1">Friends</span>
                <span className="w3-tag w3-small w3-theme">Games</span>
                <span className="w3-tag w3-small w3-theme-l1">Friends</span>
                <span className="w3-tag w3-small w3-theme-l2">Food</span>
                <span className="w3-tag w3-small w3-theme-l3">Design</span>
                <span className="w3-tag w3-small w3-theme-l4">Art</span>
                <span className="w3-tag w3-small w3-theme-l5">Photos</span>
              </p>
            </div>
          </div>
          <br />

          <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
            <span className="w3-button w3-theme-l3 w3-display-topright">
              <i className="fa fa-remove"></i>
            </span>
            <p>
              <strong>Hey!</strong>
            </p>
            <p>People are looking at your profile. Find out who.</p>
          </div>
        </div>

        <div className="w3-col m7">
          <div className="w3-row-padding">
            <div className="w3-col m12">
              <div className="w3-card w3-round w3-white">
                <div className="w3-container w3-padding">
                  <h6 className="w3-opacity">
                    Social Media template by w3.css
                  </h6>
                  <p
                    contentEditable="true"
                    className="w3-border w3-padding"
                  ></p>
                  <button type="button" className="w3-button w3-theme">
                    <i className="fa fa-pencil"></i>  Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w3-container w3-card w3-white w3-round w3-margin">
            <br />
            <img
              src="/w3images/avatar2.png"
              alt="Avatar"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: "60" }}
            ></img>
            <span className="w3-right w3-opacity">1 min</span>
            <h4>John Doe</h4>
            <br />
            <hr className="w3-clear" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="w3-row-padding" style={{ margin: "0 -16" }}>
              <div className="w3-half">
                <img
                  src="/w3images/lights.jpg"
                  style={{ width: "100%" }}
                  alt="Northern Lights"
                  className="w3-margin-bottom"
                ></img>
              </div>
              <div className="w3-half">
                <img
                  src="/w3images/nature.jpg"
                  style={{ width: "100%" }}
                  alt="Nature"
                  className="w3-margin-bottom"
                ></img>
              </div>
            </div>
            <button
              type="button"
              className="w3-button w3-theme-d1 w3-margin-bottom"
            >
              <i className="fa fa-thumbs-up"></i>  Like
            </button>
            <button
              type="button"
              className="w3-button w3-theme-d2 w3-margin-bottom"
            >
              <i className="fa fa-comment"></i>  Comment
            </button>
          </div>

          <div className="w3-container w3-card w3-white w3-round w3-margin">
            <br />
            <img
              src="/w3images/avatar5.png"
              alt="Avatar"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: "60" }}
            ></img>
            <span className="w3-right w3-opacity">16 min</span>
            <h4>Jane Doe</h4>
            <br />
            <hr className="w3-clear" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              type="button"
              className="w3-button w3-theme-d1 w3-margin-bottom"
            >
              <i className="fa fa-thumbs-up"></i>  Like
            </button>
            <button
              type="button"
              className="w3-button w3-theme-d2 w3-margin-bottom"
            >
              <i className="fa fa-comment"></i>  Comment
            </button>
          </div>

          <div className="w3-container w3-card w3-white w3-round w3-margin">
            <br />
            <img
              src="/w3images/avatar6.png"
              alt="Avatar"
              className="w3-left w3-circle w3-margin-right"
              style={{ width: "60" }}
            ></img>
            <span className="w3-right w3-opacity">32 min</span>
            <h4>Angie Jane</h4>
            <br />
            <hr className="w3-clear" />
            <p>Have you seen this?</p>
            <img
              src="/w3images/nature.jpg"
              style={{ width: "100%" }}
              className="w3-margin-bottom"
            ></img>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button
              type="button"
              className="w3-button w3-theme-d1 w3-margin-bottom"
            >
              <i className="fa fa-thumbs-up"></i>  Like
            </button>
            <button
              type="button"
              className="w3-button w3-theme-d2 w3-margin-bottom"
            >
              <i className="fa fa-comment"></i>  Comment
            </button>
          </div>
        </div>

        <div className="w3-col m2">
          <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
              <p>Upcoming Events:</p>
              <img
                src="/w3images/forest.jpg"
                alt="Forest"
                style={{ width: "100%" }}
              ></img>
              <p>
                <strong>Holiday</strong>
              </p>
              <p>Friday 15:00</p>
              <p>
                <button className="w3-button w3-block w3-theme-l4">Info</button>
              </p>
            </div>
          </div>
          <br />

          <div className="w3-card w3-round w3-white w3-center">
            <div className="w3-container">
              <p>Friend Request</p>
              <img
                src="/w3images/avatar6.png"
                alt="Avatar"
                style={{ width: "50%" }}
              ></img>
              <br />
              <span>Jane Doe</span>
              <div className="w3-row w3-opacity">
                <div className="w3-half">
                  <button
                    className="w3-button w3-block w3-green w3-section"
                    title="Accept"
                  >
                    <i className="fa fa-check"></i>
                  </button>
                </div>
                <div className="w3-half">
                  <button
                    className="w3-button w3-block w3-red w3-section"
                    title="Decline"
                  >
                    <i className="fa fa-remove"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
            <p>ADS</p>
          </div>
          <br />

          <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
            <p>
              <i className="fa fa-bug w3-xxlarge"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
