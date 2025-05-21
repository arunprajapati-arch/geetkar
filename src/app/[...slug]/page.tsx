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
    <div className="flex flex-col h-screen gap-4 md:gap-8 w-full md:px-40 p-4 ">
      <Appbar name={artistDetails?.name} firstName={artistDetails?.firstName} lastName={artistDetails?.lastName} imageUrl={artistDetails?.imageUrl} />
      <div className="md:flex  w-full  gap-8  " >
        <div className="flex flex-col  gap-4 md:w-2/3  ">
          <div className=" md:h-2/3 w-full ">
            <LatestRelease />
          </div>
          <div className="w-full">
            <ProfileLinks />
          </div>
        </div>
        <div className="md:w-1/3 md:h-5/6">
          <TrackList />
        </div>
      </div>
    </div>
  );
}