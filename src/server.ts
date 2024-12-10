import express from "express";
import { PORT } from "./config";
import { publishCast } from "./cast";

const app = express();
app.use(express.json());

app.post("/cast", async (req: any, res: any) => {
  const { text } = req.body;
  if (typeof text !== "string" || text.trim().length === 0) {
    return res
      .status(400)
      .json({ error: "text is required and must be a non-empty string" });
  }

  try {
    await publishCast(text);
    return res.status(200).json({ message: "Cast submitted successfully" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
