-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_artistId_fkey";

-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "artistId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
