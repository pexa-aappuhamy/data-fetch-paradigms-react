import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export const ProfileCard = ({ userDetails, variant = 'normal' }: { userDetails: User, variant?: "normal" | "small" }) => {
    return (
        <Card>
        <CardHeader className="flex flex-row items-center gap-2">
            <Avatar>
            <AvatarImage src={userDetails.avatar ?? ''} />
            <AvatarFallback>{userDetails.firstName.charAt(0)}{userDetails.lastName.charAt(0)}</AvatarFallback>
            </Avatar>
            {variant === "small" ? (
            <CardTitle>
                {userDetails.firstName} {userDetails.lastName}
            </CardTitle>
            ) : (
            <CardTitle>
                Profile
            </CardTitle>
            )}
        </CardHeader>
        {variant === "normal" ? (
        <>
        <CardContent className="space-y-2">
            <ProfileCardDescription label="First name:" value={userDetails.firstName} />
            <ProfileCardDescription label="Last name:" value={userDetails.lastName} />
            <ProfileCardDescription label="D.O.B:" value={userDetails.dob} />
            <ProfileCardDescription label="City of residence:" value={userDetails.city} />
        </CardContent>
        <CardFooter>
            <ProfileCardDescription label="Email:" value={userDetails.email} />
        </CardFooter>
        </>
        ) : null}
        </Card>
    );
};

const ProfileCardDescription = ({ label, value }: { label: string; value: string }) => {
    return (
        <CardDescription className="flex items-center gap-1 text-card-foreground">
                <Label htmlFor={label.replace(' ', '-')} className="font-semibold">
                    {label}
                </Label>
                {value}
        </CardDescription>
    );
}
