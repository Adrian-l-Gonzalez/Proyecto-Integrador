import { Component, OnInit } from '@angular/core';
import {MiservicioService} from './../../miservicio.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  edulist:any;
  constructor(private datosportfolio:MiservicioService) {

   }

  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.edulist=data.education;
    });
  }

}
