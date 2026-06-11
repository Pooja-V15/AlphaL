type NvidiaMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type NvidiaChoice = {
  message?: {
    content?: string;
  };
};

type NvidiaResponse = {
  choices?: NvidiaChoice[];
};

const NVIDIA_API_URL = "/api/nvidia/v1/chat/completions";

export async function askNexoraAI(question: string): Promise<string> {
  const apiKey = import.meta.env.VITE_NVIDIA_API_KEY;

  if (!apiKey || apiKey === "PASTE_YOUR_NEW_NVIDIA_API_KEY_HERE") {
    throw new Error("Missing NVIDIA API key.");
  }

  const messages: NvidiaMessage[] = [
    {
      role: "system",
      content: "You are Nexora AI, a friendly career guidance assistant for students. Answer career questions clearly and simply.",
    },
    {
      role: "user",
      content: question,
    },
  ];

  const response = await fetch(NVIDIA_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "meta/llama-3.3-70b-instruct",
      messages,
      temperature: 0.5,
      max_tokens: 400,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to connect to Nexora AI.");
  }

  const data = (await response.json()) as NvidiaResponse;
  const answer = data.choices?.[0]?.message?.content?.trim();

  if (!answer) {
    throw new Error("Nexora AI returned an empty response.");
  }

  return answer;
}
