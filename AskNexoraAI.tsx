import { FormEvent, useEffect, useRef, useState } from "react";
import BackArrow from "./BackArrow.jsx";
import GlassCard from "./GlassCard.jsx";
import { askNexoraAI } from "../services/nvidia";

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "Can I become a software engineer without JEE?",
  "What skills are needed for cybersecurity?",
  "Which career suits someone who loves mathematics?",
  "Is data science a good career in the future?",
];

export default function AskNexoraAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: Date.now(),
      role: "assistant",
      content: "Hi, I am Nexora AI. Ask me anything about careers, skills, education paths, or future opportunities.",
    },
  ]);
  const [draft, setDraft] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, error]);

  async function submitQuestion(question: string) {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: "user",
      content: trimmed,
    };

    setMessages((current) => [...current, userMessage]);
    setDraft("");
    setError("");
    setIsLoading(true);

    try {
      const answer = await askNexoraAI(trimmed);
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 1,
          role: "assistant",
          content: answer,
        },
      ]);
    } catch {
      setError("Unable to connect to Nexora AI. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitQuestion(draft);
  }

  return (
    <section className="screen ask-nexora-screen">
      <BackArrow />
      <GlassCard className="ask-nexora-panel">
        <div className="ask-nexora-head">
          <p className="kicker">Personal AI Career Counselor</p>
          <h1>Ask Nexora AI</h1>
          <p>Chat with your personal AI career counselor.</p>
        </div>

        <div className="ask-suggestions" aria-label="Suggested questions">
          {suggestedQuestions.map((question) => (
            <button key={question} type="button" onClick={() => submitQuestion(question)} disabled={isLoading}>
              {question}
            </button>
          ))}
        </div>

        <div className="ask-chat-window" aria-live="polite">
          {messages.map((message) => (
            <article className={`ask-message ${message.role}`} key={message.id}>
              <strong>{message.role === "user" ? "You" : "Nexora AI"}</strong>
              <p>{message.content}</p>
            </article>
          ))}
          {isLoading && (
            <article className="ask-message assistant loading">
              <strong>Nexora AI</strong>
              <p>Nexora AI is thinking...</p>
            </article>
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && <p className="form-status error">{error}</p>}

        <form className="ask-input-row" onSubmit={handleSubmit}>
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Ask anything about careers..."
            aria-label="Ask anything about careers"
          />
          <button className="submit-button" type="submit" disabled={isLoading || !draft.trim()}>
            Send
          </button>
        </form>
      </GlassCard>
    </section>
  );
}
