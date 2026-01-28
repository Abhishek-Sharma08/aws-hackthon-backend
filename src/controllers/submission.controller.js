import Submission from "../models/submission.medels.js"
import Lesson from "../models/lesson.models.js"
import User from "../models/user.models.js"
import { getGeminiFeedback } from "../services/gemini.service.js"

export const createSubmission = async (req, res) => {
    try {
        const userId = req.user._id
        const { lessonId, submittedCode } = req.body

        if (!lessonId || !submittedCode) {
            return res.status(400).json({
                success: false,
                message: "lessonId and submittedCode are required"
            })
        }
        const lesson = await Lesson.findById(lessonId)
        if (!lesson) {
            return res.status(404).json({
                success: false,
                message: "lesson not found"
            })
        }

        const isCorrect = submittedCode.includes(lesson.expectedOutput)

        const feedback = await getGeminiFeedback({
            concept: lesson.concept,
            expectedOutput: lesson.expectedOutput,
            submittedCode
        });


        const submission = await Submission.create({
            user: userId,
            lesson: lessonId,
            submittedCode,
            isCorrect,
            feedback
        })
        if (isCorrect) {
            await User.findByIdAndUpdate(
                userId,
                {
                    // prevent duplicate
                    $addToSet: {
                        completedLessons: lessonId
                    }
                }
            )
        }

        return res.status(201).json({
            success: true,
            submission
        })
    } catch (error) {
        console.error("submission error", error);
        return res.status(500).json({
            success: false,
            message: "server error while submitting code"
        })
    }
}

export const getMySubmissions = async (req, res) => {
    try {
        const userId = req.user._id

        const submission = await Submission.find({
            user: userId
        }).
            populate("lesson", "lessonNumber title diffuclty").
            sort({
                createdAt: -1
            })

        return res.status(200).json({
            success: true,
            count: submission.length,
            submission
        })


    } catch (error) {
        console.error("Fetch submission error", error);
        return res.status(500).json({
            success: false,
            message: "server error while fetching submission"
        })

    }
}
