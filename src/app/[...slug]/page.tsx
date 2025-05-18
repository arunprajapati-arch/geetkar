import { getArtistDetails } from "@/actions/getArtistDetails";
import Appbar from "@/components/Appbar";
import LatestRelease from "@/components/LatestRelease";
import ProfileLinks from "@/components/ProfileLinks";
import TrackList from "@/components/TrackList";

export default async function artistPage({ params }: { params: { slug: string } }) {
  const paramsFromUrl = await params;


  const artistId = paramsFromUrl.slug[0];
  const artistDetails = await getArtistDetails(artistId);
  console.log(artistDetails);
  if (!artistDetails) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="flex flex-col max-h-screen gap-12 w-full px-40">
      <Appbar name={artistDetails?.name} firstName={artistDetails?.firstName} lastName={artistDetails?.lastName} imageUrl={artistDetails?.imageUrl} />
      <div className="flex h-screen gap-8">
        <div className="flex flex-col gap-4 w-2/3 h-full">
          <div className="h-2/3 ">
            <LatestRelease />
          </div>
          <div>
            <ProfileLinks />
          </div>
        </div>
        <div className="w-1/3 h-5/6">
          <TrackList />
        </div>
      </div>
    </div>
  );
}