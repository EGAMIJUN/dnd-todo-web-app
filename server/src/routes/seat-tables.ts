import { Hono } from "hono";
import { db } from "../db";
import { seatTableProjectIdQueryValidator } from "../validators/seat-table";
import { eq } from "drizzle-orm";
import { seatTablesTable } from "../db/schemas";

const seatTableRoutes = new Hono();

// get all seat tables
seatTableRoutes.get("/", seatTableProjectIdQueryValidator, async (c) => {
  const query = c.req.valid("query");
  try {
    const tasks = await db.query.seatTablesTable.findMany({
      columns: {
        isDeleted: false,
      },
      where: query.projectId
        ? eq(seatTablesTable.projectId, query.projectId)
        : undefined,
    });
    return c.json(tasks);
  } catch (error) {
    return c.json({ message: "Error getting seat tables" }, 500);
  }
});

export { seatTableRoutes };
