import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareaService } from '../../../services/tarea.service';

@Component({
  selector: 'app-tarea-form',
  templateUrl: 'tarea-form.component.html',
})
export class TareaFormComponent implements OnInit {
  formularioTarea:FormGroup;
  uri:string;
  tarea:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private tareaService:TareaService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(3)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idTarea"];
      if(this.uri !== "nuevo") {
        this.tareaService.getTarea(params["idContacto"])
        .subscribe(tarea => {
          this.tarea = tarea;
          console.log(this.tarea.titulo);
          this.formularioTarea = new FormGroup({
            'titulo': new FormControl(this.tarea.titulo, validaciones),
            'descripcion': new FormControl(this.tarea.descripcion, validaciones),
            'fechaInicial': new FormControl(this.tarea.fechaInicial, validaciones),
            'fechaFinal': new FormControl(this.tarea.fechaFinal, validaciones),
            'estado': new FormControl(this.tarea.estado,  Validators.required),
          });
        });
      } else {
        this.formularioTarea = new FormGroup({
          'titulo': new FormControl('', validaciones),
          'descripcion': new FormControl('', validaciones),
          'fechaInicial': new FormControl('', validaciones),
          'fechaFinal': new FormControl('', validaciones),
          'estado': new FormControl('', Validators.required)
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
    if(this.uri === "nuevo") {
      console.log("Nuevo Tarea");
      console.log(this.formularioTarea.value);
      this.tareaService.nuevoTarea(this.formularioTarea.value)
      .subscribe(res => {
        if(res.estado) {
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          setTimeout(() => {
            this.router.navigate(['/dashboard/tarea']);
          }, 5000);
        }
      });
    } else {
      console.log("Modificacion de tarea");
      this.tareaService.editarTarea(this.formularioTarea.value, this.uri)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}
