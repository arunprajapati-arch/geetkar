import LinkBar from "@/components/LinkBar";
import { prisma } from "@workspace/db";
import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";

const getArtistDetails = async (artistName: string) => {
    try {
        const artistDetails = await prisma.artist.findUnique({
            where: {
                artistName: artistName
            },
            include: {
                links: true
            }
        })
        return artistDetails;
    } catch (error) {
        console.error("Error fetching artist details:", error);
        return null;
    }
}

const page = async ({ params }: { params: Promise<{ artistName: string }> }) => {
    const { artistName } = await params;


    const artistDetails = await getArtistDetails(artistName);
    if (!artistDetails) {
        return <div className="w-full md:w-1/2 h-screen border mx-auto flex justify-center ">Artist not found</div>
    }
    console.log(artistDetails?.links);

    return (
        <div className="w-full md:w-1/2 h-screen border mx-auto flex flex-col items-center gap-18 bg-gradient-to-b from-black to-blue-950">
            <div className="mt-24 flex flex-col items-center gap-4 md:gap-8">
                <Avatar className="w-24 h-24 ">
                    <AvatarImage src={"https://github.com/shadcn.png"} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                    <h1 className="text-2xl font-bold">{artistDetails.name}</h1>
                    <h2 className="md:mt-2">@{artistDetails?.artistName}</h2>
                </div>
            </div>
            <div className="w-full  flex flex-col items-center">
                {artistDetails?.links.map((link) => (
                    <div key={link.id} className="flex flex-col items-center gap-4  p-4 w-full">
                        <LinkBar link={link.url} platform={link.platofrm} />
                    </div>))}
                </div>
        </div>
    )
}

export default page