import { seed } from "drizzle-seed";
import { db } from "./src/db";
import * as schema from "./src/db/schemas";

const seedDB = async () => {
  await seed(db, schema, { count: 100 }).refine((f) => ({
    projectsTable: {
      columns: {
        projectName: f.valuesFromArray({
          values: ["Namsung", "Yabuki", "Reefer", "Job Portal", "General"],
          isUnique: true,
        }),
      },
      count: 5,
    },
    picsTable: {
      count: 30,
      columns: {
        name: f.fullName(),
      },
    },
    tasksTable: {
      columns: {
        title: f.jobTitle(),
        description: f.loremIpsum({ sentencesCount: 10 }),
        isDeleted: f.default({
          defaultValue: false,
        }),
      },
    },
  }));
};

try {
  await seedDB();
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
