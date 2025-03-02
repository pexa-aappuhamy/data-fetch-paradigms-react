import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
export const ProfileSkeleton = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-2">
                <Skeleton className="h-[40px] w-[40px] rounded-full" />
                <Skeleton className="h-4 w-[120px]" />
            </CardHeader>
            <CardContent className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[200px]" />
            </CardContent>
            <CardFooter>
                <Skeleton className="h-4 w-[200px]" />
            </CardFooter>
        </Card>
    )
}