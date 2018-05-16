import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../service/user.service";
import { UserData } from "../service/user-data";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: "app-user-view",
  templateUrl: "./user-view.component.html",
  styleUrls: ["./user-view.component.css"]
})
export class UserViewComponent implements OnInit {
  userData: UserData;
  displayedColumns = ['name', 'date', 'time', 'status'];
  dataSource = new MatTableDataSource ();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private service: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { 
      this.titleService.setTitle( 'User' );
  }

  ngOnInit() {
    this.getUser();
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
  private getUser() {
    this.activatedRoute.params.forEach((params: Params) => {
      let user_id = params["user_id"]; //параметер з роута
      if (user_id) { 
          this.service.getUser(user_id).subscribe(
            user => {
                  this.userData = user;
                  this.dataSource.data = user.genoms;
              },
             // error => this.errorMessage = error
          );
      }
      else {
         console.dir(params);
      }
    });
  }
}
