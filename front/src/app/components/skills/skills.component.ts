import { Component, OnInit } from '@angular/core';
import { MiservicioService} from './../../miservicio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  tarea:any;
constructor(private datosportfolio:MiservicioService) {

 }

  ngOnInit(): void {
    this.datosportfolio.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.tarea=data.estilo;
    });

  }

}

