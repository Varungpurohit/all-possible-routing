import { Component, OnInit } from '@angular/core';
import {FirstComponent} from '../first/first.component';
import {ThirdComponent} from '../third/third.component';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
