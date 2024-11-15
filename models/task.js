import mongoose from "mongoose"

const taskSchema= mongoose.Schema ({
    title : {
        type: String ,
        required: true,
    },
    duration : {
        type: String ,
        required: true ,
    },
})

export default mongoose.model("Task", taskSchema)