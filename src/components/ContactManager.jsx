import React from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import * as actions from "./actions";
import { connect } from "react-redux";

function ContactManager(props) {
  return (
    <div className="main">
      <div>
        <h2 style={{ textAlign: "center", padding: "10px 0" }}>
          Contact Manager
        </h2>
        <ContactForm />
        <ContactList contacts={props.contacts} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { contacts: state.contacts };
}

const mapDispatchToProps = {
  addContact: actions.addContact,
  deleteContact: actions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactManager);
