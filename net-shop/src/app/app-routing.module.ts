import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AuthGuard } from './shared/guards/auth.guards';

const routes: Routes = [ 
  { path: 'products', component: ProductPageComponent, canActivate: [AuthGuard]},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'products', pathMatch: 'full' }]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
