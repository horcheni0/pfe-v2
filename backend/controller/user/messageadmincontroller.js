const Msg = require('../../models/messageadmin');
const mongoose = require('mongoose');

const getMsg = async (req, res) => {
  try {
    const msg = await Msg.find({}).sort({ createdAt: -1 });
    res.status(200).json(msg);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createMsg = async (req, res) => {
  const { fullname, email, message, number } = req.body;
  const emptyFields = [];

  if (!fullname) emptyFields.push('fullname');
  if (!email) emptyFields.push('email');
  if (!message) emptyFields.push('message');
  if (!number) emptyFields.push('number');

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
  }

  try {
    const msg = await Msg.create({ fullname, email, message, number });
    res.status(201).json(msg);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ error: 'Failed to create message' });
  }
};

const deleteMsg = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  try {
    const msg = await Msg.findByIdAndDelete(id);
    if (!msg) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json(msg);
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
};

const deleteSingleMsg = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  try {
    const msg = await Msg.findByIdAndDelete(id);
    if (!msg) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).json({ error: 'Failed to delete message' });
  }
};

module.exports = {
  getMsg,
  createMsg,
  deleteMsg,
  deleteSingleMsg
};
