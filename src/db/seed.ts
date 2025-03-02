import * as schema from "./schema";
import { seed, reset } from "drizzle-seed";
import { drizzle } from "drizzle-orm/node-postgres";

async function main() {
  const db = drizzle(process.env.DATABASE_URL!);
  await reset(db, schema);
  await seed(db, schema)
  .refine(
    (funcs) => (
        {
            users: {
                count: 1,
                columns: {
                    id: funcs.valuesFromArray({values:["3e0bb3d0-2074-4a1e-6263-d13dd10cb0cf"]}),
                    firstName: funcs.valuesFromArray({values:["Andrew"]}),
                    lastName: funcs.valuesFromArray({values:["Appuhamy"]}),
                    country: funcs.valuesFromArray({values:["Australia"]}),
                    city: funcs.valuesFromArray({values:["Melbourne"]}),
                    dob: funcs.valuesFromArray({values:["1998-01-30"]}),
                    email: funcs.valuesFromArray({values:["andrew-app@email.com"]}),
                    avatar: funcs.valuesFromArray({values:["/avatar.jpg"]}),
                }
            }
        }
    )
  );
  console.log("Database has been seeded 🌱")
}

main();