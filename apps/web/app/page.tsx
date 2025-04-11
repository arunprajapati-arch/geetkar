import { prisma } from "@workspace/db"
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"


export default async function Page() {
  const user = await prisma.artist.findFirst();
  console.log(user);
  
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

        <h1 className="text-2xl font-bold">Hello  {user?.artistName}</h1>
        <Button >Button</Button>
      </div>
    </div>
  )
}
