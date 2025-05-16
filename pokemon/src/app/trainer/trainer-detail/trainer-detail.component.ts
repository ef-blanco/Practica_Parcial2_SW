import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  idTrainer!:number
  constructor(private trainerService:TrainerService, private router:Router) {}

  ngOnInit() 
  {
    this.getTrainer(Number(localStorage.getItem("trainer_id")));
  }

  getTrainer(trainer_id:number)
  {
    this.trainerService.getTrainer(trainer_id).subscribe(trainer =>{
      this.trainerDetail = trainer;
    });
  }
}
