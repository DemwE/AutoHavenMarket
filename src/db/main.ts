import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

// for migrations
// const migrationClient = postgres(process.env.POSTGRES_URL!,{ max: 1 });
// migrate(drizzle(migrationClient), './migrations')

// for query purposes
const queryClient = postgres(process.env.POSTGRES_URL!);
const db = drizzle(queryClient);
// await db.select().from(...