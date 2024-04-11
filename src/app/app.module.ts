import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TaskCardComponent } from './task-container/task-card/task-card.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskContainerComponent,
    TaskCardComponent,
    DeleteTaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
