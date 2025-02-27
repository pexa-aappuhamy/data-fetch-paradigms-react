import * as schema from "./schema";
import { seed } from "drizzle-seed";
import { drizzle } from "drizzle-orm/node-postgres";

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await seed(db, schema).refine(
    (funcs) => (
        {
            users: {
                count: 1,
                columns: {
                    firstName: funcs.valuesFromArray({values:["Andrew"]}),
                    lastName: funcs.valuesFromArray({values:["Appuhamy"]}),
                    country: funcs.valuesFromArray({values:["Australia"]}),
                    city: funcs.valuesFromArray({values:["Melbourne"]}),
                    dob: funcs.valuesFromArray({values:["30-01-1998"]}),
                    email: funcs.valuesFromArray({values:["andrew-app@email.com"]})
                }
            }
        }
    )
  );
  console.log("Database has been seeded 🌱")
}

main();