import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({contact}) => {

    const [connected, setConnected] = useState(false)

    const changeStatus = () => {
        setConnected(connected ? false : true)
    }

    return (
        <div>
            <h1>Your contact:</h1>
            <h2>Name: {contact.name} {contact.lastName}</h2>
            <h3>Email: {contact.email}</h3>
            <h4>{connected ? 'Contact online' : 'Contact not available'}</h4>
            <button onClick={changeStatus}>Change status</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
