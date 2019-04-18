import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionComponent } from './transaction/transaction.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BillingComponent } from './billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MasterDetailComponent } from './master/master-detail/master-detail.component';
import { RyotDetailComponent } from './master/ryot-detail/ryot-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
    SettingsComponent,
    TransactionComponent,
    VehicleComponent,
    BillingComponent,
    DashboardComponent,
    ReportsComponent,
    MasterDetailComponent,
    RyotDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
