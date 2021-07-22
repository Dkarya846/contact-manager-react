import React from "react";
import * as actions from "./actions";
import { connect } from "react-redux";

function ContactList(props) {
  const arr = props.contacts;
  const listItems = arr.map((contact, index) => (
    <li className="contact" key={index}>
      <span>{contact.name} </span>{" "}
      <span style={{ display: "flex", alignItems: "center" }}>
        {contact.number}{" "}
        <span
          onClick={() => props.deleteContact(contact)}
          className="delete-button"
        >
          x
        </span>
      </span>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
  return { contacts: state.contacts };
}

const mapDispatchToProps = {
  addContact: actions.addContact,
  deleteContact: actions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
