import { Suspense } from "react";
import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { UserProfile } from "./user-profile";

import { ProfileSkeleton } from "@/feature/profile/profile-skeleton";

const fetchUserDetails = async (userId: string) => {
    const db = drizzle({
        connection: process.env.DATABASE_URL!,
        logger: true
    });
    return await db.select()
    .from(users)
    .where(eq(users.id, userId));
};

export default function ProfilePageSuspense() {
    const userDetailsPromise = fetchUserDetails('3e0bb3d0-2074-4a1e-6263-d13dd10cb0cf');
    return (
        <Suspense fallback={<ProfileSkeleton />}>
            <UserProfile userDetailsPromise={userDetailsPromise}/>
        </Suspense>
    );
};



