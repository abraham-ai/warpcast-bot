import express from "express";
import { PORT } from "./config";
import { publishCastWithFrames } from "./cast";

const app = express();
app.use(express.json());

app.post("/cast", async (req: any, res: any) => {
  const { text, embeds } = req.body;

  if (typeof text !== "string" || text.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "text is required and must be a non-empty string" });
  }

  // embeds should be an array of strings (URLs). If not provided, pass undefined.
  const embedUrls = Array.isArray(embeds) ? embeds : undefined;

  try {
    await publishCastWithFrames(text, embedUrls);
    return res
      .status(200)
      .json({ message: "Cast with frames submitted successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
