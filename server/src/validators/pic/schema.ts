import z from "zod";

export const createPicSchema = z.object({
  name: z.string(),
  tableId: z.number(),
  seatNumber: z.number(),
  image: z.string(),
});

export const picResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  tableId: z.number(),
  seatNumber: z.number(),
  image: z.string(),
});

export const movePicSchema = z.object({
  targetPicId: z.number(),
  selectedPicId: z.number(),
});
