CREATE TABLE IF NOT EXISTS customers (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "phone_number" VARCHAR NOT NULL,
  "birthdate" TIMESTAMP,
  "onboarding_date" TIMESTAMP
);