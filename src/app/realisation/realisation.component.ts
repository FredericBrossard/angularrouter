import { Component, OnInit } from '@angular/core';
import { RealService } from '../real.service';
import { Real } from '../real';

@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.css']
})
export class RealisationComponent implements OnInit {

  constructor(public realService: RealService) {}

  ngOnInit() {
  }

}
