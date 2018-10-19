import { Component } from '@angular/core';
import * as angular from 'angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'IS51Calc';
}

const app = angular.module('myCalc', []);
app.controller('calcCtrl', function ($scope) {

});

