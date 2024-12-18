import neynarClient from "./neynarClient";
import { SIGNER_UUID } from "./config";
import { isApiErrorResponse } from "@neynar/nodejs-sdk";

export async function publishCastWithFrames(
  text: string,
  embeds?: string[]
): Promise<void> {
  try {
    await neynarClient.publishCast({
      signerUuid: SIGNER_UUID,
      text,
      embeds: embeds?.map((url) => ({ url })),
    });
    console.log("Cast with frames published successfully");
  } catch (err) {
    if (isApiErrorResponse(err)) {
      console.error("Neynar API Error:", err.response.data);
      throw new Error("Failed to publish cast due to Neynar API error");
    }
    console.error("Unknown error:", err);
    throw new Error("Failed to publish cast due to unknown error");
  }
}
