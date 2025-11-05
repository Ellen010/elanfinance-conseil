import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx'

const Contact = () => {
    const formRef = useRef();

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'JavaScript Mastery',
                    from_email: form.email,
                    to_email: 'ewlen04@outlook.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Your message was sent. Thank you!',
                        type: 'success',
                    });

                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, [3000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    showAlert({
                        show: true,
                        text: "Error occurred and the message hasn't been sent",
                        type: 'danger',
                    });
                },
            );
    };

    return (
        <section id="contact">

                <h1 className="title">Contact</h1>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className=" w-full lg:w-3/4 me-5 mr-30 text-lg lg:text-xl text-justify lg:text-left leading-relaxed">
                        <p className="description">Contactez-nous pour plus d'informations </p>
                    <div className="contact-container">


                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button>Contactez-nous</button>
                    </form>

                </div>
                </div>
            <div className="w-full lg:w-1/2 ms-5 mr-20 flex justify-center">
                    <img src="/contact-pic.png" alt="ÉlanFinance Employe working on a financial report" className="logo" />
                </div>


            </div>



        </section>
    )
}
export default Contact
