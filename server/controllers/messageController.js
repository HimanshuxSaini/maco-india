import Message from '../models/Message.js';

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
export const submitMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    if (process.env.MONGO_URI) {
      const newMessage = new Message({
        name,
        email,
        subject,
        message,
      });

      await newMessage.save();
    }
    
    // Even if DB is not connected, we simulate success for demo purposes
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
