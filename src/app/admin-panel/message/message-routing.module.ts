import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MaessageListComponent } from "./maessage-list/maessage-list.component";
import { MaessageViewComponent } from "./maessage-view/maessage-view.component";
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
                    {path:"message", component: MaessageListComponent},
                    {path:"message/:message_id", component: MaessageViewComponent}
                  ] 
            },
        ]
      }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
