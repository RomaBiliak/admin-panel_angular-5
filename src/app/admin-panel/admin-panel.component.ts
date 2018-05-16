import { Component } from "@angular/core";
import {enableProdMode} from '@angular/core';
import "./rx-js.operators";


enableProdMode();
@Component({
  selector: "app-admin-panel",
  templateUrl: "./admin-panel.component.html",
  styleUrls: ["./admin-panel.component.css"]
})
export class AdminPanelComponent {
  title = "admin-panel";
}