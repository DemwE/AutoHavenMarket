import {integer, pgEnum, pgTable, serial, uniqueIndex, uuid, varchar, date, PgTable} from 'drizzle-orm/pg-core';
import {sql} from "drizzle-orm";

export const roles = pgEnum('role', ['admin', 'user']);
export const offer_from= pgEnum('offer_type', ['private', 'company']);
export const fuel_types = pgEnum('fuel_type', ['petrol', 'diesel', 'electric', 'hybrid', 'other']);
export const drivetrains = pgEnum('drivetrain', ['FWD', 'RWD', 'AWD']);
export const color_types = pgEnum('color_type', ['metallic', 'pearl', 'matte', 'other']);
export const states = pgEnum('state', ['new', 'used', 'other']);
export const offer_states = pgEnum('offer_state', ['active', 'inactive', 'sold']);

export const users = pgTable('users', {
    id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
    name: varchar('name').notNull(),
    surname: varchar('surname').notNull(),
    email: varchar('email').unique().notNull(),
    password: varchar('password').notNull(),
    // telephone: integer('telephone').notNull(),
    role: roles('role').default('user').notNull(),
    creation_date: date('creation_date').default(sql`now()`),
    sessions: uuid('sessions').array(),
});

export const offers: any = pgTable('offers', {
    id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
    owner_id: uuid('owner_id').references(() => users.id).notNull(),
    title: varchar('title').notNull(),
    description: varchar('description').notNull(),
    offer_from: varchar('offer_from').default('private').notNull(),
    mark_id: uuid('mark_id').references(() => carMarks.id).notNull(),
    model_id: uuid('model_id').references(() => carModels.id).notNull(),
    production_year: integer('production_year').notNull(),
    mileage: integer('mileage').notNull(),
    engine_capacity: integer('engine_capacity').notNull(),
    fuel_type: fuel_types('fuel_type').notNull(),
    horse_power: integer('horse_power').notNull(),
    drivetrain: drivetrains('drivetrain').notNull(),
    doors_count: integer('doors_count').notNull(),
    seats_count: integer('seats_count').notNull(),
    color: varchar('color').notNull(),
    color_type: color_types('color_type').notNull(),
    origin_country: varchar('origin_country').notNull(),
    state: states('state').notNull(),
    vin: varchar('vin').notNull(),
    price: integer('price').notNull(),
    images: varchar('images').array(),
    offer_state: offer_states('offer_state').default('active').notNull(),
    creation_date: date('creation_date').default(sql`now()`),
});

export const carMarks = pgTable('car_marks', {
    id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
    name: varchar('name').notNull(),
    add_date: date('creation_date').default(sql`now()`),
});

export const carModels = pgTable('car_models', {
    id: uuid('id').default(sql`gen_random_uuid()`).primaryKey(),
    mark_id: uuid('mark_id').references(() => carMarks.id).notNull(),
    name: varchar('name').notNull(),
    add_date: date('creation_date').default(sql`now()`),
});