import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const sendNotificationEmail = async (recipientEmail, taskName, dueDate) => {
    try {
      await transporter.sendMail({
        from: '"Task Manager" kp271350@gmail.com',
        to: recipientEmail,
        subject: 'Task Due Reminder',
        text: `Your task "${taskName}" is due on ${dueDate}. Please complete it soon.`,
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

  export { sendNotificationEmail };