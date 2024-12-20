import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true },
    assignedTo: {  type: mongoose.Schema.Types.ObjectId },
    work :{type:String , },
    productUrl:{type:String, },
    status: { type: String, default: 0 },
    priority: { type: String, default: 1},
    createdAt: { type: Date, default: Date.now() },
    dueDate: {type: Date},
    notified: { type: Boolean, default: false },
})

const taskModel = mongoose.model("Tasks",taskSchema)
export default taskModel