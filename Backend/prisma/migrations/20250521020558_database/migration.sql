/*
  Warnings:

  - Added the required column `userId` to the `Quotes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quotes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Quotes" ("id", "text") SELECT "id", "text" FROM "Quotes";
DROP TABLE "Quotes";
ALTER TABLE "new_Quotes" RENAME TO "Quotes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
