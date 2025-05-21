import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AppbarProps {
    name: string;
    firstName?: string | null;
    lastName?: string | null;
    imageUrl?: string | null;
}

export default function Appbar({ name, firstName, lastName, imageUrl }: AppbarProps) {
    return (
        <div className="flex flex-row justify-between items-center p-4 ">
            <div className="flex flex-row items-center gap-2">
                <Avatar className="w-16 h-16 md:w-24 md:h-24">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="md:text-3xl font-bold">@{name}</h1>
            </div>
        </div>
    );
}