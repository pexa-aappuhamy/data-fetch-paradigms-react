
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { UserProfile } from "./user-profile";

const fetchUserDetails = (userId: string) => {
    const db = drizzle(process.env.DATABASE_URL!);
    return new Promise<User[]>((resolve) => {
        setTimeout(async () => {
            const result = await db.select()
                .from(users)
                .where(eq(users.id, userId)).execute();
            resolve(result);
        }, 1500);
    });
}

export default function ProfilePageUseEffect() {
    const userDetailsPromise = fetchUserDetails('3e0bb3d0-2074-4a1e-6263-d13dd10cb0cf');
    return (
        <UserProfile userDetailsPromise={userDetailsPromise}/>
    );
};



