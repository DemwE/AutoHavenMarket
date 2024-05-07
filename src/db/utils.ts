import {carMarks, carModels, offers} from "@/db/schema";
import {eq} from "drizzle-orm";
import postgres from "postgres";
import {drizzle} from "drizzle-orm/postgres-js";
import * as schema from "@/db/schema";

const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client, {schema});

// async function fetchData() {
//     const result = await db.query.users.findMany({});
//     return result;
// }

export async function fetchOffers() {
  return db.select().from(offers).innerJoin(carMarks, eq(offers.mark_id, carMarks.id)).innerJoin(carModels, eq(offers.model_id, carModels.id));
}

export async function fetchOffer(id: string) {
  return db.select().from(offers).where(eq(offers.id, id)).innerJoin(carMarks, eq(offers.mark_id, carMarks.id)).innerJoin(carModels, eq(offers.model_id, carModels.id));
}