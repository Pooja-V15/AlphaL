type NvidiaChoice = {
  message?: {
    content?: string;
  };
};

type NvidiaResponse = {
  choices?: NvidiaChoice[];
};

export type SkillGapResult = {
  skillsToImprove: Array<{
    skill: string;
    reason: string;
  }>;
};

const NVIDIA_API_URL = "/api/nvidia/v1/chat/completions";

function cleanNvidiaContent(content: string): string {
  console.log("Nexora Skill Gap raw NVIDIA content:", content);
  const withoutThinking = content.replace(/<think>[\s\S]*?<\/think>/gi, "");
  const withoutFences = withoutThinking
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
  const firstBrace = withoutFences.indexOf("{");
  const lastBrace = withoutFences.lastIndexOf("}");

  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    return withoutFences.slice(firstBrace, lastBrace + 1).trim();
  }

  return withoutFences;
}

function repairJson(json: string): string {
  return json
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, " ")
    .replace(/,\s*([}\]])/g, "$1")
    .replace(/}\s*{/g, "},{")
    .replace(/]\s*"/g, '],"')
    .replace(/"\s*\[/g, '":[')
    .trim();
}

function parseJsonResponse(content: string): SkillGapResult {
  console.log("Nexora Skill Gap extracted message:", content);
  const cleaned = cleanNvidiaContent(content);
  console.log("Nexora Skill Gap extracted JSON:", cleaned);

  let parsed: SkillGapResult;
  try {
    parsed = JSON.parse(cleaned) as SkillGapResult;
    console.log("Nexora Skill Gap parsed JSON:", parsed);
  } catch (firstError) {
    const repaired = repairJson(cleaned);
    console.log("Nexora Skill Gap repaired JSON:", repaired);
    try {
      parsed = JSON.parse(repaired) as SkillGapResult;
      console.log("Nexora Skill Gap parsed repaired JSON:", parsed);
    } catch (secondError) {
      console.error("Nexora Skill Gap raw response:", content);
      console.error("Nexora Skill Gap extracted JSON:", cleaned);
      console.error("Nexora Skill Gap JSON parsing error:", secondError);
      throw secondError;
    }
  }

  if (!Array.isArray(parsed.skillsToImprove)) {
    throw new Error("Invalid skill gap response.");
  }

  return {
    skillsToImprove: parsed.skillsToImprove.slice(0, 4),
  };
}

export async function analyzeSkillGap(
  career: string,
  careerMatchScore: number,
  simulationScore: number
): Promise<SkillGapResult> {
  const apiKey = import.meta.env.VITE_NVIDIA_API_KEY;

  if (!apiKey || apiKey === "PASTE_YOUR_NEW_NVIDIA_API_KEY_HERE") {
    throw new Error("Missing NVIDIA API key.");
  }

  const response = await fetch(NVIDIA_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta/llama-3.3-70b-instruct",
      messages: [
        {
          role: "system",
          content: "You are Nexora AI, an expert career coach.\nReturn ONLY valid JSON.",
        },
        {
          role: "user",
          content: `Career Goal: ${career}\nCareer Match Score: ${careerMatchScore}%\nSimulation Score: ${simulationScore}%\n\nGenerate EXACTLY 4 skillsToImprove entries.\n\nEach entry must contain:\n- skill\n- reason\n\nEach reason must be under 15 words.\n\nReturn ONLY valid JSON in this format:\n\n{\n  "skillsToImprove": [\n    {\n      "skill": "",\n      "reason": ""\n    }\n  ]\n}`,
        },
      ],
      temperature: 0.5,
      max_tokens: 250,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to generate skill gap analysis.");
  }

  const data = (await response.json()) as NvidiaResponse;
  console.log("Nexora Skill Gap raw NVIDIA response:", data);
  const content = data.choices?.[0]?.message?.content?.trim();

  if (!content) {
    throw new Error("Empty skill gap analysis.");
  }

  return parseJsonResponse(content);
}
