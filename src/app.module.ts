import { Module } from '@nestjs/common';
import { PersonModules } from './modules/person.modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PersonModules,
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: '../../db.sql',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
