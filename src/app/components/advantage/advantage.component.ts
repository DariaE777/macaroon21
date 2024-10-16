import {Component, Input, OnInit} from '@angular/core';
import {AdvantagesType} from "../../types/advantages.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
@Input() advantage: AdvantagesType;
  @Input() i: number;
  constructor() {
    this.i = 0;
    this.advantage = {
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
