import { int, mysqlTable, unique } from "drizzle-orm/mysql-core";
import { picsTable } from "./pic";
import { seatTablesTable } from "./seat-table";
import { relations } from "drizzle-orm";

export const picToSeatTables = mysqlTable(
  "pic_to_seat_tables",
  {
    id: int().autoincrement().primaryKey(),
    picId: int("pic_id")
      .notNull()
      .references(() => picsTable.id, { onUpdate: "cascade" }),
    seatTableId: int("seat_table_id")
      .notNull()
      .references(() => seatTablesTable.id, { onUpdate: "cascade" }),
    seatNumber: int("seat_number").notNull(),
  },
  (table) => [unique().on(table.picId, table.seatTableId)],
);

export const picToSeatTablesRelations = relations(
  picToSeatTables,
  ({ one }) => ({
    pic: one(picsTable, {
      fields: [picToSeatTables.picId],
      references: [picsTable.id],
    }),
    seatTable: one(seatTablesTable, {
      fields: [picToSeatTables.seatTableId],
      references: [seatTablesTable.id],
    }),
  }),
);
