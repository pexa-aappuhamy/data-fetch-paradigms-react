'use client'
import { ProfileCard } from "@/feature/profile/profile";
import { use } from "react";
export const UserProfile = ({userDetailsPromise} : {userDetailsPromise: Promise<User[]>} ) => {
    const [user] = use(userDetailsPromise);
    return (
    <ProfileCard userDetails={user} />
    );
};