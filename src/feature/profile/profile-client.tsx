import { use } from "react";
export const ProfileCardClient = ({userDetails}: {userDetails: Promise<Users[]>}) => {
    const user = use(userDetails)
    return (
        JSON.stringify(user[0])
    )
};