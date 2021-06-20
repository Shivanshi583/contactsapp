import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
const Contactlist = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactlist = props.contacts.map((contact) => {
        return (

            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id} />
        );
    });
    return (
        <div className="main">
            <h2>Contact List &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/add"><button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui celled list"> {renderContactlist} </div>
        </div>
    );
}
export default Contactlist;