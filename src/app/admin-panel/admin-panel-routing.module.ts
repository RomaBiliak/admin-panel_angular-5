import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel.component";
import { HomeComponent } from "./home/home.component";
import {AuthGuard} from "../service/auth-guard.service"; 


const routes: Routes = [

  {path: "admin-panel",
  component: AdminPanelComponent,
  canActivate: [AuthGuard], // если Guard  false маршрут не активний.
  children: [
      {
          path: "",
          children: [
                      { path: "home", component: HomeComponent},
                      { path: "", pathMatch: "full", redirectTo: "home"},
                    ]
      },
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
