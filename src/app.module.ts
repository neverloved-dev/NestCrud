import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Note\Module } from './note/note/.module';
import { NoteService } from './note/note.service';
import { NoteController } from './note/note.controller';

@Module({
  imports: [Note\Module],
  controllers: [AppController, NoteController],
  providers: [AppService, NoteService],
})
export class AppModule {}
