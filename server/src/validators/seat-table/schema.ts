import z from "zod";

export const seatTableProjectIdQuerySchema = z.object({
  projectId: z.coerce.number().optional(),
});
