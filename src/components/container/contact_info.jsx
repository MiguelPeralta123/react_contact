import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactInfoComponent = () => {

    const defaultContact = new Contact('Miguel', 'Peralta', 'maikperalta@gmail.com')

    return (
        <div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};


ContactInfoComponent.propTypes = {

};


export default ContactInfoComponent;
