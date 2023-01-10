import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  titulo:string="Registro de Personas";
  nombre!:string;
  dni!:number;
  estado!:string;
  datos!:object
  

  constructor() {
    
  }
  // funcion mostrar
  mostrar(){
    this.datos ={
      "nombre": this.nombre,
      "dni":this.dni,
      "estado_civil":this.estado,
    }
    console.log(this.datos)
  }
  
  ngOnInit(): void {
  }

}
