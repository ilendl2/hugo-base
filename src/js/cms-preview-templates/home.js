import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
        <Jumbotron image={image} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>

        <div>
          <h2>{entry.getIn(["data", "intro", "heading"])}</h2>
          <p>{entry.getIn(["data", "intro", "text"])}</p>
        </div>

        <div>
          <h2>{entry.getIn(["data", "blurb", "heading"])}</h2>
          <p>{entry.getIn(["data", "blurb", "text"])}</p>
        </div>

        <div>
          <img src="{entry.getIn(["data", "block", "imageUrl"])}" alt="" width="600"/>
          <h2>{entry.getIn(["data", "block", "heading"])}</h2>
          <p>{entry.getIn(["data", "block", "text"])}</p>
          <a href="{entry.getIn(["data", "block", "button_link"])}">{entry.getIn(["data", "block", "button_text"])}</a>
        </div>
    </div>
  }
}
