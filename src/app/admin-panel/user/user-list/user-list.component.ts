import { Component, OnInit, ViewChild} from "@angular/core";
import { Users } from "../service/users";
import { UserService } from "../service/user.service";
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {

  errorMessage: string;
  displayedColumns = ['email', 'date', 'country', 'city', 'http_referer', 'remote_addr'];
  dataSource = new MatTableDataSource <Users>();

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
  constructor(private service: UserService,
  private router: Router, private titleService: Title) {  this.titleService.setTitle( 'Users' ); }

  ngOnInit() {
      this.getUsers();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   }
   public applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
  private getUsers() {
    this.service.getUsers().subscribe(
        users => {this.dataSource.data = users;},
        error => this.errorMessage = error
    );
  }

}
