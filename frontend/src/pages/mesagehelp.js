import React, { useState } from 'react';
import SummaryApi from '../common/index';

const ContactUs = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(SummaryApi.messageadmin.url, {
        method: SummaryApi.messageadmin.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, message, number }),
      });
      
      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFullname('');
        setEmail('');
        setMessage('');
        setNumber('');
        setError('');
      } else {
        setError(data.error || 'Something went wrong.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="relative flex justify-center items-center rounded-2xl shadow-[0px_6px_16px_rgba(98,100,108,0.5)] mt-9 mb-10">
      <div className="flex-1 max-w-[420px]">
        <form className="login p-6" onSubmit={handleSubmit} >
          <h3 className="text-4xl mb-9 mt-6 font-bold text-navy-700 dark:text-white">You can send us <span className='text-red-600'>Message</span></h3>
          <label className='dark:text-gray-600'>Full name:</label>
          <input value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className='w-full border rounded box-border mt-2.5 mb-5 p-2.5 border-solid border-[#ddd]' type="text" />
          <label className='dark:text-gray-600'>Email address:</label>
          <input value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-full border rounded box-border mt-2.5 mb-5 p-2.5 border-solid border-[#ddd]'
            type="email" />
          <label className='dark:text-gray-600'>Number:</label>
          <input value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            className='w-full border rounded box-border mt-2.5 mb-5 p-2.5 border-solid border-[#ddd]'
            type="number" />
          <label className='dark:text-gray-600'>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className='w-full border h-[150px] rounded box-border mt-2.5 mb-5 p-2.5 border-solid border-[#ddd]'
          ></textarea>
          <button type="submit" disabled={loading} className="linear mt-2 w-full rounded-xl bg-red-600 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-red-400 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200">
            {loading ? 'Sending...' : 'Send'}
          </button>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">Message sent successfully!</div>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
