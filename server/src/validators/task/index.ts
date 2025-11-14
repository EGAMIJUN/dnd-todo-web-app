import { zValidator } from "@hono/zod-validator";
import {
  assignTaskRequestSchema,
  movetaskRequestSchema,
  projectIdParamSchema,
  taskIdParamSchema,
  taskRequestSchema,
} from "./schema";

export const getTaskByIdValidator = zValidator(
  "json",
  taskRequestSchema,
  (res, c) => {
    if (!res.success) return c.json(res.error, 400);
  },
);

export const createTaskValidator = zValidator(
  "json",
  taskRequestSchema,
  (res, c) => {
    if (!res.success) return c.json(res.error, 400);
  },
);

export const taskProjecIdQueryParamValidator = zValidator(
  "query",
  projectIdParamSchema,
  (res, c) => {
    if (!res.success) return c.json(res.error, 400);
  },
);

export const taskIdParamValidator = zValidator(
  "param",
  taskIdParamSchema,
  (res, c) => {
    if (!res.success) return c.json(res.error, 400);
  },
);

export const moveTaskValidator = zValidator(
  "json",
  movetaskRequestSchema,
  (res, c) => {
    if (!res.success) return c.json(res.error, 400);
  },
);

export const assignTaskvalidator = zValidator(
  "json",
  assignTaskRequestSchema,
  (res, c) => {
    if (!res.success) return c.json(res.error, 400);
  },
);
