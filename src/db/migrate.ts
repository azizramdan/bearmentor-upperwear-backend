import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import { postgresConnection } from './db'

(async () => {
  await migrate(drizzle(postgresConnection), { migrationsFolder: 'src/db/migrations' })

  await postgresConnection.end()
})()
