import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ComplexityPlugin } from './complexity.plugin';
import { TagModule } from './tag/tag.module';
import { TodoItemModule } from './todo-item/todo-item.module';
import { SubTaskModule } from './sub-task/sub-task.module';
import * as ormconfig from '../ormconfig.json';

@Module({
  providers: [ComplexityPlugin],
  imports: [
    TypeOrmModule.forRoot(ormconfig as TypeOrmModuleOptions),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    SubTaskModule,
    TodoItemModule,
    TagModule,
  ],
})
export class AppModule {}
