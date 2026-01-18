import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createServer } from "http";
import express from "express";
import { registerRoutes } from "../server/routes";
import { serveStatic } from "../server/static";

let server: any;

async function startServer() {
  if (server) return server;

  const app = express();
  const httpServer = createServer(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  await registerRoutes(httpServer, app);
  serveStatic(app);

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
