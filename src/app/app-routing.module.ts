import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AnguarFormsComponent } from './demos/anguar-forms/anguar-forms.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "dynamic-forms/all" },
  { path: 'dynamic-forms/:type', component: AnguarFormsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
