'use client'
import { ProfileCard } from "@/feature/profile/profile";
import { ProfileSkeleton } from "@/feature/profile/profile-skeleton";
import { useState, useEffect } from "react";

export const UserProfile = ({userDetailsPromise} : {userDetailsPromise: Promise<User[]>}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        userDetailsPromise.then(([result]) => {
            setUser(result);
            setIsLoading(false);
        });
    },[]);
    
    if (isLoading) {
        return <ProfileSkeleton />;
    }

    return <ProfileCard userDetails={user as User} />;
};