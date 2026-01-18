import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createServer } from "http";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "../server/routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let server: any;

async function startServer() {
  if (server) return server;

  const app = express();
  const httpServer = createServer(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // API routes
  await registerRoutes(httpServer, app);

  // Serve static files from dist directory
  const publicPath = path.resolve(__dirname, "../dist/public");
  app.use(express.static(publicPath));

  // SPA fallback - serve index.html for all non-API routes
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(publicPath, "index.html"));
  });

  server = httpServer;
  return server;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const httpServer = await startServer();

  return new Promise<void>((resolve) => {
    httpServer.emit("request", req, res);
    res.on("finish", () => resolve());
  });
};
