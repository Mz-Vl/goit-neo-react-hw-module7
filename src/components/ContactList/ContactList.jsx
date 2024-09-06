import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import clsx from 'clsx';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contactWrapStyles = clsx(styles.contactWrap, 'contactWrap');
    const filteredContacts = useSelector(selectFilteredContacts);

    return (
    <ul className={contactWrapStyles}>
        {filteredContacts.map(({ id, name, number }) => (
        <Contact
            key={id}
            id={id}
            name={name}
            number={number}
        />
        ))}
    </ul>
    );
};

export default ContactList;