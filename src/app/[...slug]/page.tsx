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
    <div className="flex flex-col max-h-screen md:h-screen  md:gap-8 w-full lg:px-8 2xl:px-40 p-4 ">
      <Appbar name={artistDetails?.name} firstName={artistDetails?.firstName} lastName={artistDetails?.lastName} imageUrl={artistDetails?.imageUrl} />
      <div className="md:flex  w-full  gap-8  " >
        <div className="flex flex-col  gap-4 w-full xl:w-2/3  ">
          <div className=" md:h-2/3 w-full flex items-center justify-center ">
            <LatestRelease />
          </div>
          <div className="w-full hidden md:block">
            <ProfileLinks />
          </div>
        </div>
        <div className="hidden xl:block xl:w-1/3 xl:h-5/6">
          <TrackList />
        </div>
      </div>
    </div>
  );
}