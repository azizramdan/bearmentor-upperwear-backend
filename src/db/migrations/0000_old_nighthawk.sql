DO $$ BEGIN
 CREATE TYPE "public"."productOptionIndex" AS ENUM('1', '2', '3');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."productStatus" AS ENUM('ACTIVE', 'ARCHIVED', 'DRAFT');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "collectionItems" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"collectionId" varchar(255) NOT NULL,
	"productId" varchar(255) NOT NULL,
	"position" integer NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "collections" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "collections_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productImages" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"productId" varchar(255) NOT NULL,
	"url" text NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productOptionValues" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"productOptionId" varchar(255) NOT NULL,
	"value" varchar(255) NOT NULL,
	"position" integer NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productOptions" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"productId" varchar(255) NOT NULL,
	"name" varchar(255) NOT NULL,
	"index" "productOptionIndex" NOT NULL,
	"position" "productOptionIndex" NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productVariants" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"productId" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"sku" varchar(255) NOT NULL,
	"position" integer NOT NULL,
	"price" double precision NOT NULL,
	"imageId" varchar(255),
	"optionValueId1" varchar(255) NOT NULL,
	"optionValueId2" varchar(255),
	"optionValueId3" varchar(255),
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "productVariants_sku_unique" UNIQUE("sku")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"descriptionHtml" text NOT NULL,
	"status" "productStatus" NOT NULL,
	"publishedAt" timestamp,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "products_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collectionItems" ADD CONSTRAINT "collectionItems_collectionId_collections_id_fk" FOREIGN KEY ("collectionId") REFERENCES "public"."collections"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "collectionItems" ADD CONSTRAINT "collectionItems_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productImages" ADD CONSTRAINT "productImages_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productOptionValues" ADD CONSTRAINT "productOptionValues_productOptionId_productOptions_id_fk" FOREIGN KEY ("productOptionId") REFERENCES "public"."productOptions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productOptions" ADD CONSTRAINT "productOptions_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productVariants" ADD CONSTRAINT "productVariants_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productVariants" ADD CONSTRAINT "productVariants_imageId_productImages_id_fk" FOREIGN KEY ("imageId") REFERENCES "public"."productImages"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productVariants" ADD CONSTRAINT "productVariants_optionValueId1_productOptionValues_id_fk" FOREIGN KEY ("optionValueId1") REFERENCES "public"."productOptionValues"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productVariants" ADD CONSTRAINT "productVariants_optionValueId2_productOptionValues_id_fk" FOREIGN KEY ("optionValueId2") REFERENCES "public"."productOptionValues"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productVariants" ADD CONSTRAINT "productVariants_optionValueId3_productOptionValues_id_fk" FOREIGN KEY ("optionValueId3") REFERENCES "public"."productOptionValues"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
