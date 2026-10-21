import { HumanMessage, SystemMessage } from "@langchain/core/messages"

import llm from "../configs/llm.config.js";

export const resumeAgent = async (resumeText) => {
    const response = await llm.invoke([
        new SystemMessage(`
You are an Expert ATS Resume Analyzer.

Analyze the given resume.

Extract the following information:

- Full Name
- Email
- Phone Number
- Professional Summary
- Technical Skills
- Projects
- Education
- Experience
- Strengths
- Weaknesses
- Missing Skills
- Suggested Job Role
- ATS Score (0-100)
- Recommendations

IMPORTANT RULES:

1. Return ONLY valid JSON.
2. Do not use markdown.
3. Do not explain anything.
4. Do not add extra text.
5. Every field must exist.

Use objects for education, projects, and experience entries. Use strings for all
entries in skills, strengths, weaknesses, missingSkills, and recommendations.

Response Format:

{
  "name":"",
  "email":"",
  "phone":"",
  "summary":"",
  "skills":[],
  "projects":[{"name":"","description":"","techStack":[]}],
  "education":[{"institution":"","degree":"","cgpa":"","duration":""}],
  "experience":[{"company":"","role":"","location":"","duration":"","responsibilities":[]}],
  "strengths":[],
  "weaknesses":[],
  "missingSkills":[],
  "suggestedRole":"",
  "score":0,
  "recommendations":[]
}
`),
        new HumanMessage(resumeText),
    ])

    return response.content;
}