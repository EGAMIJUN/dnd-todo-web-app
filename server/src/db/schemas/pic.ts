import { relations } from "drizzle-orm";
import {
  boolean,
  int,
  mysqlTable,
  text,
  varchar,
} from "drizzle-orm/mysql-core";
import { tasksTable } from "./task";
import { projectsTable } from "./project";
import { seatTablesTable } from "./seat-table";

export const picsTable = mysqlTable("pics", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  projectId: int("projectId")
    .references(() => projectsTable.id)
    .notNull(),
  seatTableId: int("seat_table_id")
    .references(() => seatTablesTable.id)
    .notNull(),
  seatNumber: int("seat_number").notNull(),
  profileImage: text("profile_image"),
  isDeleted: boolean("is_deleted").default(false),
});

export const picRelations = relations(picsTable, ({ one, many }) => ({
  tasks: many(tasksTable),
  project: one(projectsTable, {
    fields: [picsTable.projectId],
    references: [projectsTable.id],
  }),
  seat: one(seatTablesTable, {
    fields: [picsTable.seatTableId],
    references: [seatTablesTable.id],
  }),
}));
