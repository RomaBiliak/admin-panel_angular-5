import { Component, OnInit, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import {Settings} from "../../shared/settings"
import { AppService } from "../../shared/app.service";
import { Title } from '@angular/platform-browser';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor(private http: Http, private appService: AppService, private titleService: Title) {
    this.titleService.setTitle( 'Home' );
   }
  ngOnInit() {
    this.http.get(Settings.API_URL, this.appService.getOptions()).subscribe(
          result =>this.extractData(result.json()));
  }

  displayedColumnsGenoms  = ['name', 'email', 'time', 'date'];
  displayedColumnsMessages  = ['email', 'theme', 'text',  'date'];
  dataSourceGenoms = new MatTableDataSource();
  dataSourceMessages = new MatTableDataSource();

 
  @ViewChild("matSortGenoms") sortGenoms: MatSort;
  @ViewChild("matSortMessages") sortMessages: MatSort;
  @ViewChild("paginatorMessages") paginatorMessages: MatPaginator;
  @ViewChild("paginatorGenoms") paginatorGenoms: MatPaginator;


  ngAfterViewInit() {
    this.dataSourceGenoms.paginator = this.paginatorGenoms;
    this.dataSourceMessages.paginator = this.paginatorMessages;
    this.dataSourceGenoms.sort = this.sortGenoms;
    this.dataSourceMessages.sort = this.sortMessages;
   }
   public applyFilterGenoms(filterValue: string) {
     filterValue = filterValue.trim(); 
     filterValue = filterValue.toLowerCase(); 
     this.dataSourceGenoms.filter = filterValue;
   }
   public applyFilterMessages(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSourceMessages.filter = filterValue;
  }

  
  private  extractData(res: any){
   this.dataSourceGenoms.data = res['genoms'];
   this.dataSourceMessages.data = res['messages'];
  }
}
