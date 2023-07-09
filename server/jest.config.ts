import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ["./src/singleton.ts"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "dist"],
};

export default config;
