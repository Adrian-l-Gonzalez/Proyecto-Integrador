import { Component, OnInit } from '@angular/core';
import {MiservicioService} from './../../miservicio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    miportfolio:any;
  constructor( private datosportfolio:MiservicioService) {
    
  } 
    
  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.miportfolio=data;
    });
  }
  
}

