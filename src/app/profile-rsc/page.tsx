import { drizzle } from "drizzle-orm/node-postgres";
import { users } from "@/db/schema";
import { eq } from 'drizzle-orm';
import { cache, Suspense } from 'react'
import { ProfileCard } from "@/feature/profile/profile";
import { ProfileSkeleton } from "@/feature/profile/profile-skeleton";

const queryUserDetails = async (userId: string) => {
    const db = drizzle({
        connection: process.env.DATABASE_URL!,
        logger: true
    });
    return await db.select()
    .from(users)
    .where(eq(users.id, userId));
};

export default function ProfilePageRSC() {
    return (
        <Suspense fallback={<ProfileSkeleton />}>
        <UserProfile />
        <UserProfileVariant />
        </Suspense>
    )
};

const UserProfile = async () => {
    const [userDetails] = await queryUserDetails('3e0bb3d0-2074-4a1e-6263-d13dd10cb0cf');
    return (
        <ProfileCard userDetails={userDetails} />
    )
};

const UserProfileVariant = async () => {
    const [userDetails] = await queryUserDetails('3e0bb3d0-2074-4a1e-6263-d13dd10cb0cf');
    return (
        <ProfileCard userDetails={userDetails} variant="small"/>
    )
};