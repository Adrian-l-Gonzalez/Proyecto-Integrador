import { Component, OnInit } from '@angular/core';
import {MiservicioService} from './../../miservicio.service';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  worklist:any;
  constructor(private datosportfolio:MiservicioService) { 

  }

  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.worklist=data.works;
    });
  }

}
