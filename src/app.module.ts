import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './note/note.module';
import { NoteService } from './note/note.service';
import { NoteController } from './note/note.controller';
import { Note } from './note/note.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'user1234',
      database: 'notes',
      entities: [Note],
    }),
    NotesModule],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
