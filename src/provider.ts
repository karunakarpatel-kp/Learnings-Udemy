type Provider = "openai" | "gemini" | "groq";

type HelloOutput = {
  ok: true;
  provider: Provider;
  model: string;
  message: string;
};

type GeminiGenerateContent = {
  candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
};

const helloGemini = async () => {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) throw new Error("Google API Key is Not Present...!");

  const model = "gemini-2.0-flash-lite";

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?=key=${apiKey}`;

  const resP = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: "Say a short hello",
            },
          ],
        },
      ],
    }),
  });

  if (!resP.ok) throw new Error(`Gemini ${resP.status}: ${await resP.text()}`);

  const json = (await resP.json) as GeminiGenerateContent;

  const text = json.candidates?.[0].content?.parts?.[0].text ?? "Hello as a default";

  return {
    ok: true,
    model,
    provider: "gemini",
    message: String(text).trim(),
  };
};
