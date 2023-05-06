import fs from "fs/promises";
import { openai } from "./app.service.mjs";

const inputFilePath = "./data/posts.json";
const outputFilePath = "./data/posts_with_embedding.json";

const data = await fs.readFile(inputFilePath, "utf-8");
const posts = JSON.parse(data);

const postsWithEmbedding = [];

for (const { title, category } of posts) {
  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: `标题：${title}; 分类：${category}`,
  });

  postsWithEmbedding.push({
    title,
    category,
    embedding: response.data.data[0].embedding,
  });
}

await fs.writeFile(outputFilePath, JSON.stringify(postsWithEmbedding, null, 2));