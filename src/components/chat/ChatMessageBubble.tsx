"use client";

import { UIMessage } from "ai";
import { motion } from "framer-motion";

interface ChatMessageBubbleProps {
  readonly message: UIMessage;
  readonly i: number;
  readonly messages: UIMessage[];
  readonly isLoading: boolean;
}

const ChatMessageBubble = ({
  message,
  i,
  messages,
  isLoading,
}: ChatMessageBubbleProps) => {
  return (
    <motion.div
      key={`${message.role}-${i}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${
        message.role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm md:text-base leading-relaxed ${
          message.role === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-foreground"
        }`}
      >
        {message.parts.map((part, index) => {
          if (part.type === "text") {
            return <span key={`${part}-${index}`}>{part.text}</span>;
          }
          return null;
        })}
        {isLoading &&
          message.role === "assistant" &&
          i === messages.length - 1 && (
            <motion.span
              className="inline-block w-2 h-2 bg-foreground/70 rounded-full ml-1"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
          )}
      </div>
    </motion.div>
  );
};

export default ChatMessageBubble;
