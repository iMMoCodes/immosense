"use client";

import { motion } from "framer-motion";

interface ChatBoxProps {
  readonly children: React.ReactNode;
}

const ChatBox = ({ children }: ChatBoxProps) => {
  return (
    <motion.div
      className="flex-1 overflow-y-auto space-y-6 mb-6 p-4 border border-border rounded-xl bg-background/70 backdrop-blur-sm shadow-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ChatBox;
