# Farcaster Warpcast Bot with Neynar

This project demonstrates how to publish Farcaster casts using [Neynar](https://github.com/neynar) with a Node.js & TypeScript Express server. It provides a `/cast` endpoint to which you can POST a message to be published as a cast on Warpcast.

## Prerequisites

- **Neynar API Key**:  
  You need an API key from Neynar to authenticate your requests. Place it in the `.env` file.
- **Approved Signer**:  
  You need a valid signer that has been approved on-chain. Neynar provides tools to get a signer and instructions to approve it.  
  For more info on how to obtain the `SIGNER_UUID`, see the Neynar documentation.

## Getting Started

1. **Clone the Repository or Copy Files**

   ```bash
   git clone https://github.com/abraham-ai/warpcast-bot
   cd warpcast-bot
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the project root with the following:

   ```env
   NEYNAR_API_KEY=your_neynar_api_key_here
   SIGNER_UUID=your_signer_uuid_here
   PORT=3000
   ```

   Replace `your_neynar_api_key_here` and `your_signer_uuid_here` with your actual values.

   - `NEYNAR_API_KEY`: Your Neynar API key.
   - `SIGNER_UUID`: The UUID of your approved Farcaster signer.
   - `PORT` is optional (defaults to `3000` if not set).

4. **Build the Project**  
   Compile the TypeScript code into JavaScript:

   ```bash
   npm run build
   ```

   This will create a `dist` directory with compiled `.js` files.

5. **Run the Server**  
   Once built, start the server:

   ```bash
   npm start
   ```

   The server will run at `http://localhost:3000` (or the port you specified).

## Usage

### Publishing a Simple Text Cast

Send a POST request to `/cast` with a JSON body containing the `text` field:

```bash
curl -X POST http://localhost:3000/cast \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello Farcaster!"}'
```

If successful, you’ll receive:

```json
{ "message": "Cast submitted successfully" }
```

### Publishing a Cast with Frames/Embeds

To include frames (e.g., images, NFTs, links), add an `embeds` array with URLs:

```bash
curl -X POST http://localhost:3000/cast \
  -H "Content-Type: application/json" \
  -d '{"text":"Check out this awesome frame!", "embeds":["https://example.com/my-frame"]}'
```

If successful:

```json
{ "message": "Cast with frames submitted successfully" }
```

Farcaster clients will attempt to render the provided URL as a rich embed.

## Development Mode

If you prefer hot-reloading while developing, run:

```bash
npm run dev
```

This uses `nodemon` and `ts-node` to automatically restart the server when you make changes to `.ts` files. No need to rebuild every time.
