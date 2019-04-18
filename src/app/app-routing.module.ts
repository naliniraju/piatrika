import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionComponent } from './transaction/transaction.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BillingComponent } from './billing/billing.component';
import { ReportsComponent } from './reports/reports.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MasterDetailComponent } from './master/master-detail/master-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'masterdetail' },
  { path: 'home', component: HomeComponent },
  { path: 'master', component: MasterComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'billing', component: BillingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'masterdetail', component: MasterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
