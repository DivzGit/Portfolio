import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    subject: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/contact/send', formData)
      .then(response => {
        console.log(response.data);
        alert('Email sent successfully');
      })
      .catch(error => {
        console.error('There was an error sending the email!', error);
        alert('Failed to send email');
      });
  };

  return (
    <section className="bg-white text-black p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg">Your Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg">Your Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg">Phone No *</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg">Select Topic *</label>
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg">Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-bold text-lg">Your Message *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
