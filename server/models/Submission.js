import mongoose from "mongoose";

const submissionSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        problemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Problem",
            required: true,
        },
        status: {
            type: String,
            enum: ["Accepted", "Wrong Answer", "Runtime Error"],
            required: true,
        },
        language: {
            type: String,
            required: true,
        },

        code: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const Submission = mongoose.model("Submission", submissionSchema)

export default Submission;