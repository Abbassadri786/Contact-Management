import React from "react"; 
import ContactCard from "./ConatctCard";

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard
            contact ={contact}
            clickHander = {deleteContactHandler}
            key={contact.id}
            />
        );
    });
    return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;