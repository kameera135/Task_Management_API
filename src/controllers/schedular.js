import cron from 'node-cron';
import { sendNotificationEmail } from '../services/emailService.js';

import tasks from '../models/task.js';
import user from '../models/user.js';

cron.schedule('0 * * * *', async () => {
  const now = new Date();
  const next24Hours = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  try {
    const tasks = await Task.find({ dueDate: { $lte: next24Hours, $gt: now }, notified: false });

    for (const task of tasks) {

        if(!task.assignedTo){
            console.log("Task is not assigned to user");
        }

        const user = await User.findById(task.assignedTo)

        if(!user){
            console.log("user not found");
        }

        await sendNotificationEmail(user.email, task.title, task.dueDate);
        task.notified = true; // Set a flag to avoid resending
        await task.save();
    }

    console.log('Checked for due tasks and sent notifications');
  } 
  catch (error) {
    console.error('Error checking tasks:', error);
  }
});
