import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
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

  ) {
    let validaciones = [
      Validators.required, Validators.minLength(3)
    ];
    this.usuarioService.getUsuarios().subscribe(res => {
      this.usuario = res;

      console.log(this.usuario.nombre);
      this.formularioUsuario = new FormGroup({
        'nombre': new FormControl(this.usuario.nombre, validaciones),
        'contrasena': new FormControl(this.usuario.contrasena, validaciones),
        'idUsuario': new FormControl({value: this.usuario.idUsuario, disabled: true}, Validators.required)
      });
    });



  }
  public inicializar() {
    this.usuarioService.getUsuarios().subscribe(data => {
      this.usuario = data;
    });
  }


  ngOnInit() {
    this.inicializar()
  }

  salir() {
    localStorage.removeItem('token');
    this.router.navigate(["/login"]);
  }

}
