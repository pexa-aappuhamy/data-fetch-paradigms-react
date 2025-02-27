import { uuid, pgTable, varchar, date, customType  } from "drizzle-orm/pg-core";

const bytea = customType<{ data: Buffer; notNull: false; default: false }>({
    dataType() {
      return "bytea";
    },
});


export const users = pgTable("users", {
    id: uuid().primaryKey(),
    firstName: varchar({ length: 255 }).notNull(),
    lastName: varchar({ length: 255 }).notNull(),
    country: varchar({ length: 255 }).notNull(),
    city: varchar({ length: 255 }).notNull(),
    dob: date().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    avatar: varchar({ length: 100 }),
})