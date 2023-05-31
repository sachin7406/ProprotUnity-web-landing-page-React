import React, { useState, createContext } from 'react';
import axios from 'axios';
import Cango from './Congo'
const ContactFormContext = createContext();

const ContactFormProvider = ({ children }) => {


  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://formspree.io/f/xpzeekpq', {
        fname,
        lname,
        email,
        phone,
        message,
      });

      if (response.status === 200) {
        setSubmissionStatus('success');
        resetForm();
        window.open('/Congo', '_self');
        
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFName('');
    setLName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmissionStatus(null);
  };

  const contextValue = {
    fname,
    setFName,
    lname,
    setLName,
    email,
    setEmail,
    phone,
    setPhone,
    message,
    setMessage,
    isSubmitting,
    submissionStatus,
    handleSubmit,
    resetForm,
  };

  return (
    <ContactFormContext.Provider value={contextValue}>
      {children}
    </ContactFormContext.Provider>
  );
};

export { ContactFormProvider, ContactFormContext };
