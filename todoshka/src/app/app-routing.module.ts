import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ListsComponent} from "./components/lists/lists.component";
import {LabelsComponent} from "./components/labels/labels.component";
import {ArchiveComponent} from "./components/archive/archive.component";
import {ErrorComponent} from "./components/error/error.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lists', component: ListsComponent},
  {path: 'labels', component: LabelsComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
