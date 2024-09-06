import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import clsx from "clsx";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();
    const contactStyles = clsx(styles.contact, 'contact');
    const contactWrapStyles = clsx(styles.contactWrap, 'contactWrap');

    const handleDelete = () => dispatch(deleteContact(id));

    return (
    <li className={contactStyles}>
        <p className={contactWrapStyles}>
        <span>{name}</span>
        <span>{number}</span>
        </p>
        <button onClick={handleDelete}>Delete</button>
    </li>
    );
};

export default Contact;