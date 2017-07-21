import { Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoFormComponent } from './contacto/contacto-form.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaFormComponent } from './categoria/categoria-form.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareaFormComponent } from './tarea/tarea-form.component';

export const dashboard_routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/:idUsuario', component: UsuarioFormComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'contacto/:idContacto', component: ContactoFormComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'categoria/:idCategoria', component: CategoriaFormComponent },
  { path: 'tarea', component: TareaComponent },
  { path: 'tarea/:idTarea', component: TareaFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'usuario' }
];
