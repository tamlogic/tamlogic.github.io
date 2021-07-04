import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonComponent} from './lesson/lesson.component';

const routes: Routes = [
  {
    path: 'lesson',
    data: {
      title: 'Lesson'
    },
    component: LessonComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
