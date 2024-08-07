import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IntegratedpageComponent } from './pages/integratedpage/integratedpage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'details', component: IntegratedpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
