import React, { useState, useRef } from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';
import '../style/style.css';
import emailjs from 'emailjs-com';



function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    };
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;


        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };
    const handleValidation = (e) => {
        e.preventDefault();
        if (e.target.name === 'email') {
            if (!validateEmail(e.target.value)) {
                setErrorMessage('Email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage('This is required field');
            } else {
                setErrorMessage('');
            }
        }

    }
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setUserName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');
        sendEmail(e);
    };

    return (
        <div className="px-5 text-white justify-center py-5">
            <h3 className="p-4">Contact</h3>
            <form className="form inputForm" ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>

                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                        type="email"
                        placeholder="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" class="form-label">Name</label>
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                        type="text"
                        placeholder="username"
                        class="form-control"
                        id="exampleInputName1"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" class="form-label">Message</label>
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        onBlur={handleValidation}
                        type="text"
                        placeholder="Enter a message"
                        class="form-control messageBox"
                        id="exampleInputMessage1"
                    >

                    </textarea>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </form>

        </div>
    );
}

export default Form;
