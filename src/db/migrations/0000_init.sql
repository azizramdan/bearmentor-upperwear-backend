CREATE TABLE IF NOT EXISTS "categories" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"price" varchar NOT NULL,
	"categoryId" varchar NOT NULL,
	"imageUrls" text[] NOT NULL,
	"description" text NOT NULL,
	"sku" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_categoryId_categories_id_fk" FOREIGN KEY ("categoryId") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
