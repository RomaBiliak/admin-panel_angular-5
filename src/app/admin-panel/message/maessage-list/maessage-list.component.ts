import { Component, OnInit, ViewChild } from "@angular/core";
import { Messages } from "../service/messages";
import { MessageService } from "../service/message.service";
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: "app-maessage-list",
  templateUrl: "./maessage-list.component.html",
  styleUrls: ["./maessage-list.component.css"]
})
export class MaessageListComponent implements OnInit {

  errorMessage: string;
  displayedColumns = ['email', 'name', 'theme', 'text', 'http_x_real_ip', 'date'];
  dataSource = new MatTableDataSource <Messages>();

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
  constructor(private service: MessageService, private router: Router,  private titleService: Title) {
    this.titleService.setTitle( 'Messages' );
   }

  ngOnInit() {
      this.getMessages();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   }
   public applyFilter(filterValue: string) {
     filterValue = filterValue.trim();
     filterValue = filterValue.toLowerCase();
     this.dataSource.filter = filterValue;
   }
  private getMessages() {
    this.service.getMessages().subscribe(
        messages =>{this.dataSource.data = messages;},
        error => this.errorMessage = error
    );
  }

}
