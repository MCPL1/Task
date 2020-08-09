import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { NotesReducer } from './reducers/notes.reducer';
import { NotesEffects } from './effects/note.effects';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NoteListComponent } from './note-list/note-list.component';
import {Routes, RouterModule} from '@angular/router';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteAddComponent } from './note-add/note-add.component';

const appRoutes: Routes =[
  { path: '', component: NoteListComponent},
  { path: 'add', component: NoteAddComponent},
  { path: 'edit/:id', component: NoteEditComponent},
  { path: '**', component: NoteListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    NoteListComponent,
    NoteEditComponent,
    NoteAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot( { notes: NotesReducer } ),
    EffectsModule.forRoot([NotesEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
