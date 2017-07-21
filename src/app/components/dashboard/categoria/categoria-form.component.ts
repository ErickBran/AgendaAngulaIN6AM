import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: 'categoria-form.component.html',
})
export class CategoriaFormComponent implements OnInit {
  formularioCategoria:FormGroup;
  uri:string;
  categoria:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private categoriaService:CategoriaService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(3)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idCategoria"];
      if(this.uri !== "nuevo") {
        this.categoriaService.getCategoria(params["idCategoria"])
        .subscribe(categoria => {
          this.categoria = categoria;
          console.log('Hola');
          console.log(this.categoria.nombre);
          this.formularioCategoria = new FormGroup({
            'nombre': new FormControl(this.categoria.nombre, validaciones),
            });
        });
      } else {
        console.log('Hola 2');
        this.formularioCategoria = new FormGroup({
          'nombre': new FormControl('', validaciones)
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
    if(this.uri === "nuevo") {
      console.log("Nueva Categoria");
      console.log(this.formularioCategoria.value);
      this.categoriaService.nuevaCategoria(this.formularioCategoria.value)
      .subscribe(res => {
        if(res.estado) {
          this.notificacion.mensaje = res.mensaje;
          this.notificacion.estado = res.estado;
          setTimeout(() => {
            this.router.navigate(['/dashboard/categoria']);
          }, 5000);
        }
      });
    } else {
      console.log("Modificacion de categoria");
      this.categoriaService.editarCategoria(this.formularioCategoria.value, this.uri)
      .subscribe(res => {
        console.log(res);
      });
    }
  }
}
