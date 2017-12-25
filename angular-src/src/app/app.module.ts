import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService} from './services/validate.service';
import { AuthService} from './services/auth.service';
import { ComponentCommunicationService} from './services/component-communication.service';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard} from './guards/auth.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';

import { ChartsModule } from 'ng2-charts';
import { DatePickerModule } from 'ng2-datepicker';

const appRoutes: Routes =[
    {path:'', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'statistics', component: StatisticsComponent, canActivate:[AuthGuard]},
    {path:'expenseList', component: ExpenseListComponent, canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    StatisticsComponent,
    NavbarComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ChartsModule,
    DatePickerModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, ComponentCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
