import * as schema from '../db/schema';
import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import Navigation from "@/components/navbar";

const client = postgres(process.env.POSTGRES_URL!);
const db = drizzle(client, {schema});

async function fetchData() {
    const result = await db.query.users.findMany({});
    return result;
}


export default async function Home() {
    const res = await fetchData();
    return (
        <main className="">
            <Navigation/>
            WIP
            {JSON.stringify(res)}
        </main>
    );
}
