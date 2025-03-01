'use client'
import { useState, useEffect } from "react";

export const UserProfile = ({userDetails}: {userDetails: Promise<User[]>}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        userDetails.then((result) => {
            setUser(result[0]);
            setIsLoading(false);
        });
    },[]);
    
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        JSON.stringify(user)
    )
};