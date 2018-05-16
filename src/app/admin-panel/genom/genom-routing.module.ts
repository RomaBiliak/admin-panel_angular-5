import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GenomListComponent } from "./genom-list/genom-list.component";
import { GenomViewComponent } from "./genom-view/genom-view.component";
import {AuthGuard} from "../../service/auth-guard.service";
import { AdminPanelComponent } from "../admin-panel.component";
export const routes: Routes = [
  {path: "admin-panel",
  component: AdminPanelComponent,
  canActivate: [AuthGuard],
  
        children: [
                    {path:"genom", component: GenomListComponent},
                    {path:"genom/:genom_id", component: GenomViewComponent}
        ]
      }    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenomRoutingModule { }