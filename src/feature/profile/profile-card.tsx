import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { ProfileCardClient } from "./profile-client";
import { Suspense } from "react";


export const ProfileCard = async () => {
    const db = drizzle(process.env.DATABASE_URL!);
    const fetchUser = () => {
        return new Promise<Users[]>((resolve) => {
            setTimeout(async () => {
                const result = await db.select()
                    .from(users)
                    .where(eq(users.id, "3e0bb3d0-2074-4a1e-6263-d13dd10cb0cf")).execute();
                resolve(result);
            }, 3000);
        });
    }
    const userDetails = fetchUser();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfileCardClient userDetails={userDetails}/>
       </Suspense>
    )
}

