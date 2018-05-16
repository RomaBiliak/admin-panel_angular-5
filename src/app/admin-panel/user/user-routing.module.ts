import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserViewComponent } from "./user-view/user-view.component";
import { UserListComponent } from "./user-list/user-list.component";

import {AuthGuard} from "../../service/auth-guard.service";
import { AdminPanelComponent } from "../admin-panel.component";
const routes: Routes = [
  {path: "admin-panel",
  component: AdminPanelComponent,
  canActivate: [AuthGuard],
        children: [
            {
                path: "",
                children: [
                    {path:"user", component: UserListComponent},
                    {path:"user/:user_id", component: UserViewComponent}
                ] 
            },
        ]
      }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
