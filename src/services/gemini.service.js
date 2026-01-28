const GEMINI_API_URL = 
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const getGeminiFeedback = async (
    {
        concept,
        expectedOutput,
        submittedCode
    }
) => {
    try {
        const prompt = `
        You are an AI coding mentor.

Lesson Concept:
${concept}

Expected Output:
${expectedOutput}

Student Submitted Code:
${submittedCode}

Task:
- Tell the student if their approach is correct or incorrect
- Explain WHY in simple language
- Give one hint to improve (do NOT give full solution)
- Be encouraging and beginner-friendly`

        const response = await fetch(`
${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ]
            })
        })

        const data = await response.json()
        // console.log("data", data);

        return (
            data?.candidates?.[0]?.content?.parts?.[0]?.text || "ai feedback service is unavailable"
        )


    } catch (error) {
        console.error("Gemini ai error", error);
        return "ai feedback service is unavilable"
    }
}