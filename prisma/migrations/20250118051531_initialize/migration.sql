-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('YouTube', 'Spotify', 'Apple_Music');

-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('Google', 'Credentials');

-- CreateTable
CREATE TABLE "Artist" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT,
    "profileImage" TEXT,
    "provider" "Provider" NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "link" TEXT NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Artist_username_key" ON "Artist"("username");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
