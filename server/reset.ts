import { reset } from "drizzle-seed";
import { db } from "./src/db";
import * as schema from "./src/db/schemas";

const resetDB = async () => {
  await reset(db, schema);
};

try {
  await resetDB();
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
