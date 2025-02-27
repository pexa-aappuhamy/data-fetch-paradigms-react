import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { ProfileCardClient } from "./components/profile-client";
import { Suspense } from "react";


export const Profile = async ({userId}: {userId: string}) => {
    const db = drizzle(process.env.DATABASE_URL!);
    const fetchUser = () => {
        return new Promise<Users[]>((resolve) => {
            setTimeout(async () => {
                const result = await db.select()
                    .from(users)
                    .where(eq(users.id, userId)).execute();
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

