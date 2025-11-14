import { relations, sql } from "drizzle-orm";
import {
  boolean,
  datetime,
  int,
  mysqlEnum,
  mysqlTable,
  text,
} from "drizzle-orm/mysql-core";
import { picsTable } from "./pic";
import { projectsTable } from "./project";

export const tasksTable = mysqlTable("tasks", {
  id: int().autoincrement().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
  projectId: int("project_id")
    .references(() => projectsTable.id)
    .notNull(),
  picId: int("pic_id").references(() => picsTable.id),
  createDate: datetime("create_date", { mode: "string" }).default(sql`now()`),
  completeDate: datetime("complete_date", { mode: "string" }),
  dueDate: datetime("due_date", { mode: "string" }),
  isDeleted: boolean("is_deleted").default(false),
  status: mysqlEnum([
    "Backlog",
    "In Progress",
    "Completed",
    "For Testing",
    "Reject",
    "Finished",
  ])
    .default("Backlog")
    .notNull(),
});

export const tasksRelations = relations(tasksTable, ({ one }) => ({
  pic: one(picsTable, {
    fields: [tasksTable.picId],
    references: [picsTable.id],
  }),
  project: one(projectsTable, {
    fields: [tasksTable.projectId],
    references: [projectsTable.id],
  }),
}));
