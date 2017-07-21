import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//ROUTES
import { app_routing } from './app.routes';

//SERVICES
import { UsuarioService } from './services/usuario.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ContactoService } from './services/contacto.service';
import { CategoriaService } from './services/categoria.service';
import { TareaService } from './services/tarea.service';

//COMPONENTES
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { UsuarioFormComponent } from './components/dashboard/usuario/usuario-form.component';
import { ContactoComponent } from './components/dashboard/contacto/contacto.component';
import { ContactoFormComponent } from './components/dashboard/contacto/contacto-form.component';
import { CategoriaComponent } from './components/dashboard/categoria/categoria.component';
import { CategoriaFormComponent } from './components/dashboard/categoria/categoria-form.component';
import { TareaComponent } from './components/dashboard/tarea/tarea.component';
import { TareaFormComponent } from './components/dashboard/tarea/tarea-form.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    ContactoComponent,
    CategoriaComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    TareaComponent,
    ContactoFormComponent,
    CategoriaFormComponent,
    UsuarioFormComponent,
    TareaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [
    UsuarioService,
    AuthGuardService,
    ContactoService,
    CategoriaService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
