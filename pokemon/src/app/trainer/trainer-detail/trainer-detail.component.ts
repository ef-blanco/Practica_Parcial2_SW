import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  idTrainer!:number
  constructor() {}

  ngOnInit() {}
}
