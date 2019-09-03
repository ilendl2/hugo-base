import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <div class="hero-section" style={{backgroundImage: image && `url(${image})`}}>
        <div class="hero-section-text">
          <h1>{ title }</h1>
          {subtitle && <h3>{ subtitle }</h3>}
        </div>
      </div>
    </div>;
  }
}
