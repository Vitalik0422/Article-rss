-- CreateTable
CREATE TABLE "RssURL" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "RssURL_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RssURL_name_key" ON "RssURL"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RssURL_url_key" ON "RssURL"("url");
