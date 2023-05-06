import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

export const openai = new OpenAIApi(configuration);