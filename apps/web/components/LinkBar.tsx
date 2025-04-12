import { $Enums } from "@workspace/db"
import { Youtube } from "lucide-react"

type Props = {
    link: string
    platform: $Enums.Platform
}

// Convert enum value to user-friendly display name
const getPlatformDisplayName = (platform: $Enums.Platform): string => {
  switch (platform) {
    case $Enums.Platform.YOUTUBE:
      return "YouTube";
    case $Enums.Platform.SPOTIFY:
      return "Spotify";
    case $Enums.Platform.APPLE_MUSIC:
      return "Apple Music";
    default:
      return platform;
  }
}

const LinkBar = ({link, platform}: Props) => {
  const displayName = getPlatformDisplayName(platform);
//   if($Enums.Platform[platform] === "OTHER") return;
  
  return (
    <div className="flex justify-between gap-4 mb-4 p-4 px-8 rounded-full border border-white w-4/5 md:w-2/3">
      <div>{displayName}</div>
      <Youtube className="text-red-500" />
    </div>
  )
}

export default LinkBar