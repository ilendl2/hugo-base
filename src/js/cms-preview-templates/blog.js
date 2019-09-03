import React from "react";
import format from "date-fns/format";

export default class BlogPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <h2>{ entry.getIn(["data", "title"])}</h2>
      <p>{ format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") }</p>
      <p>{ entry.getIn(["data", "description"]) }</p>
      { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
      { widgetFor("body") }
    </div>;
  }
}
