import React, { useState, useEffect } from 'react';
import './messageadmin.css'; // Importing CSS file for styling
import SummaryApi from '../common/index';

const MessageAdmin = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMessages = async () => {
    try {
      const response = await fetch(SummaryApi.messageadmin.url);
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        setError('Failed to fetch messages');
      }
    } catch (error) {
      setError('Error fetching messages');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      const response = await fetch(`/api/msg/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        setError('Failed to delete message');
      }
    } catch (error) {
      setError('Error deleting message');
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="message-container">
      <h2>Messages Welcome</h2>
      {loading && <p>Loading messages...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul className="message-list">
          {messages.map((msg) => (
            <li key={msg._id} className="message-item">
              <strong>Fullname:</strong> {msg.fullname}<br />
              <strong>Email:</strong> {msg.email}<br />
              <strong>Message:</strong> {msg.message}<br />
              <strong>Number:</strong> {msg.number}<br />
              <button className="delete-button" onClick={() => deleteMessage(msg._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MessageAdmin;
