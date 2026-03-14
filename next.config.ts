import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Turbopack to load Prisma as a standard Node module
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;