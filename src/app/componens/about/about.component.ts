import { Component, OnInit } from '@angular/core';
import {MiservicioService} from './../../miservicio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private _servicio:MiservicioService) {
    
  } 
    
  ngOnInit(): void {
  }
  
}

