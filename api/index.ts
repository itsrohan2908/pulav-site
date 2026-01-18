import type { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

let app: express.Application | null = null;

async function initApp() {
  if (app) return app;

  app = express();

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // API routes
  const httpServer = createServer(app);
  await registerRoutes(httpServer, app);

  // Serve static files from dist/public
  const publicPath = path.resolve(__dirname, "../dist/public");
  console.log("Serving static files from:", publicPath);
  app.use(express.static(publicPath));

  // SPA fallback - serve index.html for all non-API routes
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(publicPath, "index.html");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(indexPath);
  });

  return app;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const expressApp = await initApp();
  return expressApp(req, res);
};
