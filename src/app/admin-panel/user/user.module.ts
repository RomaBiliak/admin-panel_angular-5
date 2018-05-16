import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";
import { UserViewComponent } from "./user-view/user-view.component";
import { UserListComponent } from "./user-list/user-list.component";

import { UserService } from "./service/user.service";
import {MaterialModule} from '../../material.module';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ],
  declarations: [UserViewComponent, UserListComponent],
  providers: [UserService],
})
export class UserModule { }
