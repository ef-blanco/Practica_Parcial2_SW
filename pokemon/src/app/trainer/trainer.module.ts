import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';
import { PokemonModule } from '../pokemon/pokemon.module';
import { TrainerRouting } from './trainer-routing';

@NgModule({
  imports: [CommonModule, PokemonModule, TrainerRouting],
  declarations: [TrainerListComponent, TrainerDetailComponent],
  exports: [TrainerListComponent],
})
export class TrainerModule {}
