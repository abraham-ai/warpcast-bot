# Farcaster Warpcast Bot with Neynar

This project demonstrates how to publish Farcaster casts using [Neynar](https://github.com/neynar) with a Node.js & TypeScript Express server. It provides a `/cast` endpoint to which you can POST a message to be published as a cast on Warpcast.

## Prerequisites

- **Neynar API Key**:  
  You need an API key from Neynar to authenticate your requests. Place it in the `.env` file.
- **Approved Signer**:  
  You need a valid signer that has been approved on-chain. Neynar provides tools to get a signer and instructions to approve it.  
  For more info on how to obtain the `SIGNER_UUID`, see the Neynar documentation.

````markdown
# Farcaster Bot with Neynar

This project demonstrates how to publish Farcaster casts using [Neynar](https://github.com/neynar) through a Node.js & TypeScript Express server. It provides a `/cast` endpoint to which you can POST a JSON payload containing a `text` field, and it will publish that text as a Farcaster cast on behalf of the specified signer.

## Prerequisites

- **Farcaster FID & Approved Signer**:  
  You need a valid Farcaster identity (FID) and a signer that has been approved on-chain. Neynar provides tools to create a signer and instructions to approve it. You must complete that process and have a `SIGNER_UUID` that references a fully approved Farcaster signer.

- **Neynar API Key**:  
  You need an API key from Neynar to authenticate your requests. This key grants your application access to Neynar’s casting functionalities.

## Getting Started

1. **Clone the Repository or Copy Files**  
   If you have these files in a directory, you can skip this step. Otherwise:
   ```bash
   git clone https://github.com/example/your-repo.git
   cd your-repo
   ```
````

2. **Install Dependencies**  
   Ensure you have Node.js (LTS) and npm installed. Then run:

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

6. **Test the Cast Endpoint**  
   To publish a cast, send a POST request:

   ```bash
   curl -X POST http://localhost:3000/cast \
     -H "Content-Type: application/json" \
     -d '{"text":"Hello Farcaster!"}'
   ```

   If successful, you’ll receive:

   ```json
   { "message": "Cast submitted successfully" }
   ```

   Your Farcaster cast should appear under the signer’s identity shortly.

## Development Mode

If you prefer hot-reloading while developing, run:

```bash
npm run dev
```

This uses `nodemon` and `ts-node` to automatically restart the server when you make changes to `.ts` files. No need to rebuild every time.

## Project Structure

- **`.env`**: Contains environment variables such as `NEYNAR_API_KEY`, `SIGNER_UUID`, and optionally `PORT`.
- **`.gitignore`**: Lists files and directories ignored by Git.
- **`package.json`** & **`tsconfig.json`**: Standard Node.js and TypeScript configuration files.
- **`src/` directory**: Contains the source code:
  - **`config.ts`**: Loads config variables from `.env`.
  - **`neynarClient.ts`**: Initializes and exports a Neynar API client instance.
  - **`cast.ts`**: Contains the `publishCast()` function that uses the Neynar client to publish casts.
  - **`server.ts`**: The Express server code, defining the `/cast` endpoint.

## Notes

- Ensure that the `SIGNER_UUID` corresponds to a signer that has been fully approved on-chain. If the signer is not approved, the cast submission will fail.
- Refer to Neynar’s documentation for detailed instructions on creating and approving a signer if you haven't done so yet.
- For more advanced scenarios, such as adding images or replying to other casts, consult Farcaster and Neynar documentation.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request with your improvements or suggestions.

## License

This example is provided without any specific license. Feel free to adapt, modify, and integrate it into your projects as needed.

````

1. **Clone the Repository or Copy Files**
   If you have these files in a directory, you can skip this step. Otherwise:
   ```bash
   git clone https://github.com/example/your-repo.git
   cd your-repo
````

2. **Install Dependencies**  
   Ensure you have Node.js (LTS) and npm installed. Then run:

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

6. **Test the Cast Endpoint**  
   To publish a cast, send a POST request:

   ```bash
   curl -X POST http://localhost:3000/cast \
     -H "Content-Type: application/json" \
     -d '{"text":"Hello Farcaster!"}'
   ```

   If successful, you’ll receive:

   ```json
   { "message": "Cast submitted successfully" }
   ```

   Your Farcaster cast should appear under the signer’s identity shortly.

## Development Mode

If you prefer hot-reloading while developing, run:

```bash
npm run dev
```

This uses `nodemon` and `ts-node` to automatically restart the server when you make changes to `.ts` files. No need to rebuild every time.
