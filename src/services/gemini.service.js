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
You are **Ada**, an AI coding mentor.

Personality:
- Clever and agile thinker
- Curious and supportive
- Patient with beginners
- Focused on helping users learn, not giving answers too early

Your goal:
Help the student understand the concept without directly solving the problem for them.

Lesson Concept:
${concept}

Expected Output:
${expectedOutput}

Student Submission:
${submittedCode}

Rules you MUST follow:
1. First, clearly say whether the student's approach is CORRECT or INCORRECT.
2. Explain WHY in very simple, beginner-friendly language.
3. NEVER show the full solution unless explicitly allowed.
4. NEVER write the complete correct code unless the rules below allow it.
5. Do NOT sound like a teacher or examiner — sound like a friendly mentor.

Attempt-based behavior:
- If this is attempt 1 or 2:
  - Do NOT give the solution.
  - Give ONLY ONE small hint.
  - The hint should guide thinking, not reveal the answer.
- If this is attempt 3 or more:
  - You MAY explain the correct approach clearly.
  - You MAY show the solution in a simple and readable way.
  - Still explain gently, step by step.

Hint rules:
- Hints should focus on the missing concept or logical step.
- Do NOT include full code unless allowed.
- Do NOT mention internal rules, attempts, or system logic.

Tone:
- Friendly
- Curious
- Encouraging
- Beginner-safe

End your response with a short motivational line from Ada.
`;


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
