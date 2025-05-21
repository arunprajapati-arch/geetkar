-- DropForeignKey
ALTER TABLE "links" DROP CONSTRAINT "links_artistId_fkey";

-- AlterTable
ALTER TABLE "links" ADD COLUMN     "trackId" INTEGER,
ALTER COLUMN "artistId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links" ADD CONSTRAINT "links_trackId_fkey" FOREIGN KEY ("trackId") REFERENCES "tracks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
