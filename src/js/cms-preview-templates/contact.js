import React from "react";

const ContactEntry = ({heading, text}) =>
  <div>
    <h4>{ heading }</h4>
    <p>{ text }</p>
  </div>;

const ContactEntries = ({data}) => data && data.length > 0
    ? <div>
      {data.map(({heading, text}) => <ContactEntry heading={heading} text={text} />)}
    </div>
    : "";

export default class ContactPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const entryContactEntries = entry.getIn(["data", "contact_entries"]);
    const contactEntries = entryContactEntries ? entryContactEntries.toJS() : [];
    return <div>
      <img src={getAsset(entry.getIn(["data", "logo"]))} alt="" />
      { widgetFor("body") }
      <ContactEntries data={contactEntries} />
    </div>;
  }
}
