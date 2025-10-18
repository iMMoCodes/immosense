"use client";

import { useState, useRef, useEffect } from "react";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessageBubble from "@/components/chat/ChatMessageBubble";
import ChatBox from "@/components/chat/ChatBox";
import { UIMessage } from "ai";

export default function ChatPage() {
  const [messages, setMessages] = useState<UIMessage[]>([
    {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      parts: [
        {
          type: "text",
          text: "Hello! I'm iMMoSense — your intelligent AI assistant. How can I help you today?",
        },
      ],
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: UIMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      parts: [{ type: "text", text: input }],
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [...messages, userMessage],
      }),
    });

    if (!res.ok || !res.body) {
      setIsLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let assistantMessage = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      assistantMessage += chunk;

      setMessages((prev) => {
        const last = prev.at(-1);
        const id = last?.id ?? `assistant-${Date.now()}`;
        const assistantObj: UIMessage = {
          id,
          role: "assistant",
          parts: [{ type: "text", text: assistantMessage }],
        };
        if (last?.role === "assistant") {
          return [...prev.slice(0, -1), assistantObj];
        } else {
          return [...prev, assistantObj];
        }
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="flex flex-col h-[calc(100vh-11rem)] max-w-3xl mx-auto pt-8 pb-4 px-4">
      <ChatBox>
        {messages.map((message, i) => (
          <ChatMessageBubble
            key={`${message.role}-${i}`}
            message={message}
            i={i}
            messages={messages}
            isLoading={isLoading}
          />
        ))}
        <div ref={messagesEndRef} />
      </ChatBox>

      <ChatInput
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        isLoading={isLoading}
      />
    </main>
  );
}
