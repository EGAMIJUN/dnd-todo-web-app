import { Hono } from "hono";
import { db } from "../db";

const seatTableRoutes = new Hono();

// get all seat tables
seatTableRoutes.get("/", async (c) => {
  try {
    const tasks = await db.query.seatTablesTable.findMany({
      columns: {
        isDeleted: false,
      },
    });
    return c.json(tasks);
  } catch (error) {
    return c.json({ message: "Error getting seat tables" }, 500);
  }
});

export { seatTableRoutes };
