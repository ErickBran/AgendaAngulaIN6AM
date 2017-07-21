import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: 'usuario-form.component.html',
})
export class UsuarioFormComponent implements OnInit {
  formularioUsuario:FormGroup;
  uri:string;
  usuario:any;
  notificacion:any = {
    estado: false,
    mensaje: ""
  }

  constructor(
    private usuarioService:UsuarioService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {
    let validaciones = [
      Validators.required, Validators.minLength(3)
    ];

    this.activatedRoute.params.subscribe(params => {
      this.uri = params["idUsuario"];
      if(this.uri !== "nuevo") {
        this.usuarioService.getUsuario(params["idUsuario"])
        .subscribe(usuario => {
          this.usuario = usuario;
          console.log(this.usuario.nombre);
          this.formularioUsuario = new FormGroup({
            'nombre': new FormControl(this.usuario.nombre, validaciones),
            'contrasena': new FormControl(this.usuario.contrasena, validaciones),
          });
        });
      } else {
        this.formularioUsuario = new FormGroup({
          'nombre': new FormControl('', validaciones),
          'contrasena': new FormControl('', validaciones)
        });
      }
    });
  }

  ngOnInit() {
  }

  public guardarCambios() {
      console.log("Modificacion de usuario");
      this.usuarioService.editarUsuario(this.formularioUsuario.value, this.uri)
      .subscribe(res => {
        console.log(res);
      });
  }
}
