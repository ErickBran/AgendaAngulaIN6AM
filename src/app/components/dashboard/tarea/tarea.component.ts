import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styles: []
})
export class TareaComponent implements OnInit {

  tareas:any[] = [];

  constructor(
    private tareaService:TareaService
  ) { }

  public inicializar() {
    this.tareaService.getTareas().subscribe(data => {
      this.tareas = data;
    });
  }

  ngOnInit() {
    this.inicializar();
  }

  borrarTarea(idTarea:any) {
    this.tareaService.eliminarTarea(idTarea)
    .subscribe(res => {
      if(res.estado) {
        this.inicializar();
      }
    });
  }
}
