import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';

const routes:Routes = [
    {
        path:"",
        component:TrainerListComponent
    },
    {
        path:":id",
        component:TrainerDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerRouting {
}
