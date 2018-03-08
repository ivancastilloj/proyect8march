import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactosComponent } from './contactos/contactos.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';
import { InsertarComponent } from './insertar/insertar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'contacto',
    component: ContactosComponent,
    data: { title: 'Contacto' }
  },
  {
    path: 'footer',
    component: FooterComponent,
    data: { title: 'Footer' }
  },
    {
    path: 'header',
    component: HeaderComponent,
    data: { title: 'Header' }
  },
   {
    path: 'servicios',
    component: ServiciosComponent,
    data: { title: 'Servicios' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'blog' }
  },
  {
    path: 'insertar',
    component: InsertarComponent,
    data: { title: 'insertar' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }


];

@NgModule({
 
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
