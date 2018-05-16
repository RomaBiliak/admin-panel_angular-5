import { Component, OnInit, ViewChild } from "@angular/core";
import { Router} from "@angular/router";
import { Genom } from "../service/genom";
import { GenomService } from "../service/genom.service";
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { Title } from '@angular/platform-browser';
@Component({
  selector: "app-genom-list",
  templateUrl: "./genom-list.component.html",
  styleUrls: ["./genom-list.component.css"]
})
export class GenomListComponent implements OnInit {
  errorMessage: string;
  displayedColumns = ['name', 'email', 'time', 'date', 'status', 'delete'];
  dataSource = new MatTableDataSource <Genom>();

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  constructor(private service: GenomService,
              private router: Router,
              private titleService: Title) { 
    this.titleService.setTitle( 'Genoms' );
  }

  ngOnInit() {
      this.getGenoms();
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

  private getGenoms() {
    this.service.getGenoms().subscribe(
        genom => {
          this.dataSource.data = genom;
        },
        error => this.errorMessage = error
        
    );
    
  }
  public deleteGenom(genom_id :number){
    this.getGenoms();
    if(genom_id>0){
        this.service.deleteGenom(genom_id)
        .subscribe(
        () => this.getGenoms(),
        error => this.errorMessage = error
        );
    }
  }
}
