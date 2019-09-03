import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default className PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

        <div id="bg-grey" className="pad">
          <div className="grid-container pad">
            <div className="grid-x grid-padding-x grid-padding-y align-center">
              <div className="medium-8 cell">
                <center>
                  <h2><strong>{entry.getIn(["data", "intro", "heading"])}</strong></h2>
                  <p>{entry.getIn(["data", "intro", "text"])}</p>
                </center>
              </div>
            </div>
          </div>
        </div>

        <div id="bg-off-white" className="pad">
          <div className="grid-container pad">
            <div className="grid-x grid-padding-x align-center">
              <div className="medium-10 cell">
                <div className="grid-x grid-padding-x align-middle">
                  <div className="medium-5 cell">
                    <h2><strong>{entry.getIn(["data", "blurb", "heading"])}</strong></h2>
                  </div>
                  <div className="medium-7 cell">
                    <p>{entry.getIn(["data", "blurb", "text"])}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="bg-grey">
          <div id="media-block" className="grid-container pad">
        		<div className="grid-x grid-padding-x grid-padding-y align-middle">
        			<div className="medium-6 cell">
        				<img src="img/home-about-section.jpg" alt="">
        			</div>
        			<div className="medium-6 cell">
        				<h2><strong>{entry.getIn(["data", "block", "heading"])}</strong></h2>
        				<p>{entry.getIn(["data", "block", "text"])}</p>
        				<a href="{{.buttonLink}}" className="button">Read more</a>
        			</div>
        		</div>
        	</div>
        </div>
    </div>
  }
}
