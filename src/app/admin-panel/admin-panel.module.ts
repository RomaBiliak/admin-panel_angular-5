import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminPanelRoutingModule } from "./admin-panel-routing.module";
import { HomeComponent } from "./home/home.component";
import { AdminPanelComponent } from "./admin-panel.component";
import {UserModule } from "./user/user.module";
import { GenomModule } from "./genom/genom.module";
import { MessageModule } from "./message/message.module";

import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    UserModule,
    GenomModule,
    MessageModule,
    MaterialModule
  ],
  declarations: [HomeComponent,  AdminPanelComponent],

})
export class AdminPanelModule { }
