# Migration `20200713093726-1st-migration`

This migration has been generated by Madison Kanna at 7/13/2020, 9:37:26 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "Message" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
"content" TEXT NOT NULL)

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200713093726-1st-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,19 @@
+
+// datasource tells prisma of sqlite db connection
+datasource db {
+  provider = "sqlite" 
+  url = "***"
+}
+
+//our prisma client we will generate
+generator client {
+    provider = "prisma-client-js"
+}
+
+
+// data models 
+model Message {
+  id          Int      @id @default(autoincrement())
+  createdAt   DateTime @default(now())
+  content String
+}
```


