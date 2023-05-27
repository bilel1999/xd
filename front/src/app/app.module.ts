import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorComponent } from './views/doctor/doctor.component';
import { PatientComponent } from './views/patient/patient.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { NavComponent } from './views/nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContactusComponent } from './views/contactus/contactus.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { HeartStatsComponent } from './views/heart-stats/heart-stats.component';
import { TokenInterceptorService } from './views/services/token-interceptor.service';
import {CookieService} from 'ngx-cookie-service';
import { DoctorlistComponent } from './views/doctorlist/doctorlist.component';
import { PatientlistComponent } from './views/patientlist/patientlist.component';
import { TestComponent } from './views/test/test.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminComponent } from './views/admin/admin.component';
import { DoctorlistBackComponent } from './views/doctorlistBack/doctorlistBack.component';
import { PatientlistBackComponent } from './views/patientlistBack/patientlistBack.component';
import { RendezVousComponent } from './views/rendez-vous/rendez-vous.component';
import { ApiService } from './core/services/api.service';
import {ButtonModule} from "primeng/button";
import {MenubarModule} from "primeng/menubar";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/calendar";
import {ChartModule} from "primeng/chart";
import { ScheduleModule, RecurrenceEditorModule,WeekService,WorkWeekService,MonthAgendaService,MonthService } from '@syncfusion/ej2-angular-schedule';
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    ContactusComponent,
    AboutusComponent,
    HeartStatsComponent,
    DoctorlistComponent,
    PatientlistComponent,
    TestComponent,
    AdminComponent,
    DoctorlistBackComponent,
    PatientlistBackComponent,
    RendezVousComponent


  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        NgxPaginationModule,
        ButtonModule,
        MenubarModule,
        DialogModule,
        InputTextModule,
        RippleModule,
        TableModule,
        CalendarModule,
        ChartModule,
        ScheduleModule, RecurrenceEditorModule,


    ],

  providers: [CookieService,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},ApiService,WeekService,WorkWeekService,MonthAgendaService,MonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
