import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
import { GastosComponent } from './gastos/gastos.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'balance-general', component: BalanceGeneralComponent},
    {path: 'ingresos', component: IngresosComponent},
    {path: 'gastos', component: GastosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{ }
