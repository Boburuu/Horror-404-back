// ormconfig.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Jedi',
  database: 'Horror_404',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/*.migrations.js'],
  migrationsTableName: 'custom_migration_table',
  synchronize: true,
};

export default config;
