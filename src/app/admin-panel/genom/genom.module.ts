import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GenomRoutingModule } from "./genom-routing.module";
import { GenomListComponent } from "./genom-list/genom-list.component";
import { GenomViewComponent } from "./genom-view/genom-view.component";
import { ReactiveFormsModule } from "@angular/forms";
import { GenomService } from "./service/genom.service";
import { RouterModule } from "@angular/router";
import { AppService } from "../../shared/app.service";
import {MaterialModule} from '../../material.module';
@NgModule({
  imports: [
    CommonModule,
    GenomRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [GenomListComponent, GenomViewComponent],
  providers: [GenomService, AppService],
})
export class GenomModule { }
