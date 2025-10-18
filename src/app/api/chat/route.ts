import { streamText, convertToModelMessages } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawMessages: any[] = Array.isArray(body?.messages)
      ? body.messages
      : [];

    if (rawMessages.length === 0) {
      return new Response("No valid messages received", { status: 400 });
    }

    const modelMessages = convertToModelMessages(
      rawMessages.map((m: any) => {
        const role = m.role;
        // If the client already provided parts, use them; otherwise build a text part from content (stringify non-strings)
        const parts =
          Array.isArray(m.parts) && m.parts.length > 0
            ? m.parts
            : [
                {
                  type: "text",
                  text:
                    typeof m.content === "string"
                      ? m.content
                      : JSON.stringify(m.content ?? ""),
                },
              ];
        return { role, parts };
      })
    );

    const result = streamText({
      model: "gpt-4o-mini",
      messages: modelMessages,
      temperature: 0.7,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
