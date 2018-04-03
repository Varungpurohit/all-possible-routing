import { Component, OnInit } from '@angular/core';
import {SecondComponent} from '../second/second.component';
import {ThirdComponent} from '../third/third.component';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
