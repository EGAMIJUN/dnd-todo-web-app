import { zValidator } from "@hono/zod-validator";
import { seatTableProjectIdQuerySchema } from "./schema";

export const seatTableProjectIdQueryValidator = zValidator(
  "query",
  seatTableProjectIdQuerySchema,
  (res, c) => {
    if (!res.success) return c.json(res.error, 400);
  },
);
