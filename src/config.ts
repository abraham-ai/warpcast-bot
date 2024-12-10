import dotenv from "dotenv";
dotenv.config();

if (!process.env.NEYNAR_API_KEY) {
  throw new Error("NEYNAR_API_KEY not found in .env");
}

if (!process.env.SIGNER_UUID) {
  throw new Error("SIGNER_UUID not found in .env");
}

export const NEYNAR_API_KEY = process.env.NEYNAR_API_KEY;
export const SIGNER_UUID = process.env.SIGNER_UUID;
export const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
