import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MessageRoutingModule } from "./message-routing.module";
import { MaessageListComponent } from "./maessage-list/maessage-list.component";
import { MaessageViewComponent } from "./maessage-view/maessage-view.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MessageService } from "./service/message.service";
import { MaterialModule } from '../../material.module';
@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [MaessageListComponent, MaessageViewComponent],
  providers: [MessageService],
})
export class MessageModule { }
