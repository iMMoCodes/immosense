"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";
import { useTranslations } from "next-intl";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
  isLoading: boolean;
}

const ChatInput = ({
  input,
  setInput,
  sendMessage,
  isLoading,
}: ChatInputProps) => {
  const t = useTranslations("chatInput");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage();
      }}
      className="flex gap-2"
    >
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("typeYourMessage")}
        className="flex-1"
      />
      <Button
        type="submit"
        size="icon"
        className="rounded-full"
        disabled={!input.trim() || isLoading}
      >
        <SendHorizontal className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default ChatInput;
