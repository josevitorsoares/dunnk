import { config } from "dotenv";
import { join } from "node:path";
import { z } from "zod";

const result = config({
  path: join(__dirname, "..", "..", ".env"),
});

if (result.error) {
  if (result.error.message === "ENOENT") {
    throw new Error('Missing ".env" file');
  }

  throw new Error(result.error.message);
}

const envSchema = z.object({
  API_PORT: z.coerce.number().default(3333),
  BALLDONTLIE_SDK_KEY: z.string(),
  CRON_EXPRESSION: z.string(),
});

const env = envSchema.parse(process.env, {
  errorMap: () => ({ message: "Environment variable not found" }),
});

const { API_PORT, BALLDONTLIE_SDK_KEY, CRON_EXPRESSION } = env;

export { API_PORT, BALLDONTLIE_SDK_KEY, CRON_EXPRESSION };
