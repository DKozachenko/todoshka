import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListsComponent } from './components/lists/lists.component';
import { LabelsComponent } from './components/labels/labels.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TaskComponent } from './components/task/task.component';
import { MessageComponent } from './components/message/message.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { ArchiveTaskComponent } from './components/archive-task/archive-task.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { ListComponent } from './components/list/list.component';
import { LabelComponent } from './components/label/label.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    LabelsComponent,
    ArchiveComponent,
    TaskComponent,
    MessageComponent,
    ArchiveTaskComponent,
    AddButtonComponent,
    ListComponent,
    LabelComponent,
    FilterPipe,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
