import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist/public");
  
  if (!fs.existsSync(distPath)) {
    console.warn(
      `Warning: Build directory not found: ${distPath}. Run 'npm run build' first.`,
    );
    return;
  }

  app.use(express.static(distPath));

  // SPA fallback - serve index.html for all non-API routes
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
