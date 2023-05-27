import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginComponent } from './views/login/login.component';
import { DoctorComponent } from './views/doctor/doctor.component';
import { PatientComponent } from './views/patient/patient.component';
import { ContactusComponent } from './views/contactus/contactus.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { DoctorlistComponent } from './views/doctorlist/doctorlist.component';
import { AuthGuard } from './views/shared/auth.guard';
import { TestComponent } from './views/test/test.component';
import { PatientlistComponent } from './views/patientlist/patientlist.component';
import { AdminComponent } from './views/admin/admin.component';
import { DoctorlistBackComponent } from './views/doctorlistBack/doctorlistBack.component';
import { PatientlistBackComponent } from './views/patientlistBack/patientlistBack.component';
import { RendezVousComponent } from './views/rendez-vous/rendez-vous.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadChildren: ()=> import('./views/home/home.component').then(m => m.HomeComponent)
      }
    ],
  },
  {
    path: 'rdv',
    component: RendezVousComponent,
    children: [
      {
        path: 'rdv',
        loadChildren: ()=> import('./views/rendez-vous/rendez-vous.component').then(m => m.RendezVousComponent)
      }
    ],
  },
   {
     path: 'admin',
     component: AdminComponent,
     children: [
      {
        path: 'admin',
         loadChildren: ()=> import('./views/admin/admin.component').then(m => m.AdminComponent)
      }
    ]
  },
   {
    path: 'doctorsback',
    component: DoctorlistBackComponent,
    children: [
     {
       path: 'doctorsback',
        loadChildren: ()=> import('./views/doctorlistBack/doctorlistBack.component').then(m => m.DoctorlistBackComponent)
     }
   ]
  },
  {
    path: 'patientback',
    component: PatientlistBackComponent,
    children: [
     {
       path: 'patientback',
        loadChildren: ()=> import('./views/patientlistBack/patientlistBack.component').then(m => m.PatientlistBackComponent)
     }
   ]
  },
 {
  path: 'signup',
  component: SignupComponent,
  children: [
   {
     path: 'signup',
      loadChildren: ()=> import('./views/signup/signup.component').then(m => m.SignupComponent)
   }
 ]
},
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        loadChildren: ()=> import('./views/login/login.component').then(m => m.LoginComponent)
      }
    ]
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    children: [
     {
       path: 'doctor',
        loadChildren: ()=> import('./views/doctor/doctor.component').then(m => m.DoctorComponent)
     }
   ]
  },
  {
  path: 'aboutus',
    component: AboutusComponent,
    children: [
      {
        path: 'aboutus',
        loadChildren: ()=> import('./views/aboutus/aboutus.component').then(m => m.AboutusComponent)
      }
    ]
  },
  {
    path: 'contactus',
      component: ContactusComponent,
      children: [
        {
          path: 'contactus',
          loadChildren: ()=> import('./views/contactus/contactus.component').then(m => m.ContactusComponent)
        }
      ]
    },
    {
      path: 'doctor',
        component: DoctorComponent,
        children: [
          {
            path: 'doctor',
            loadChildren: ()=> import('./views/doctor/doctor.component').then(m => m.DoctorComponent)
          }
        ]
      },
      {
        path: 'patient',
          component: PatientComponent,
          children: [
            {
              path: 'patient',
              loadChildren: ()=> import('./views/patient/patient.component').then(m => m.PatientComponent)
            }
          ]
        },
        {
          path: 'doctors',
            component: DoctorlistComponent,
            children: [
              {
                path: 'doctors',
                loadChildren: ()=> import('./views/doctorlist/doctorlist.component').then(m => m.DoctorlistComponent)
              }
            ]
          }, 
          {
            path: 'addtest',
              component: TestComponent,
              children: [
                {
                  path: 'addtest',
                  loadChildren: ()=> import('./views/test/test.component').then(m => m.TestComponent)
                }
              ]
            }, 
            {
              path: 'patients',
                component: PatientlistComponent,
                children: [
                  {
                    path: 'patients',
                    loadChildren: ()=> import('./views/patientlist/patientlist.component').then(m => m.PatientlistComponent)
                  }
                ]
              },   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
