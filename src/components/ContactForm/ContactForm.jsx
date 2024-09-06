import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contactFormStyles = clsx(styles.contactForm, 'contactForm');
    const errorMessage = clsx(styles.error, 'error');

    const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    number: Yup.string()
        .matches(
        /^[\d\s()+-]+$/,
        'Phone number can only contain digits, spaces, parentheses, plus sign, and hyphens'
        )
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    });

    const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({
        name: values.name.trim(),
        number: values.number.trim(),
    }));
    resetForm();
    };

    return (
    <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        <Form className={contactFormStyles}>
        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" className={errorMessage} />
    
        <label htmlFor="number">Number</label>
        <Field name="number" type="text" />
        <ErrorMessage name="number" component="div" className={errorMessage} />
    
        <button type="submit">Add contact</button>
        </Form>
    </Formik>
    );
};

export default ContactForm;