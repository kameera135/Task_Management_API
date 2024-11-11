// testEmailService.js
import { sendNotificationEmail } from './emailService.js';

async function testEmail() {
  const testEmail = 'testmail@gmail.com';
  const taskName = 'Test Task';
  const dueDate = new Date().toLocaleString();

  try {
    await sendNotificationEmail(testEmail, taskName, dueDate);
    console.log('Email sent successfully and correctly');
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

testEmail();
