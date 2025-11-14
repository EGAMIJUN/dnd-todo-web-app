import { Hono } from "hono";
import { db } from "../db";

const projectRoutes = new Hono();

// get all projects
projectRoutes.get("/", async (c) => {
  try {
    const tasks = await db.query.projectsTable.findMany({
      columns: {
        isDeleted: false,
      },
    });
    return c.json(tasks);
  } catch (error) {
    return c.json({ message: "Error getting projects" }, 500);
  }
});

export { projectRoutes };
