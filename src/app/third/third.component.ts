import { Component, OnInit } from '@angular/core';
import {SecondComponent} from '../second/second.component';
import {FirstComponent} from '../first/first.component';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
