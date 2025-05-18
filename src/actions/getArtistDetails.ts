import { prisma } from "@/lib/db";

export async function getArtistDetails(artistId: string) {
  const artist = await prisma.artist.findUnique({
    where: {
      name: artistId,
    },
    include: {
      tracks: true,
      links: true,
    },
  });
  return artist;
}