import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { GenomData } from "../service/genom-data";
import { Data } from "../service/data";
import { GenomService } from "../service/genom.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";//для обробки форми
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-genom-view",
  templateUrl: "./genom-view.component.html",
  styleUrls: ["./genom-view.component.css"]
})

export class GenomViewComponent implements OnInit {
  genomData: GenomData;
  errorMessage: String;
  genomForm: FormGroup;
  data: Data;

  constructor(private service: GenomService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private titleService: Title
            ) { 
                this.titleService.setTitle( 'Edit genom' );
            }



  ngOnInit() {
      this.buildForm();
      this.getPageData();
      this.getGenom();
  }

  

  private getGenom() { //один геном з бази
    this.activatedRoute.params.forEach((params: Params) => {
      let genom_id = params["genom_id"]; //параметер з роута
      if (genom_id) { //якщо є айді гена виконуєм запит через апі
          this.service.getGenom(genom_id).subscribe(
            genom => {
                  this.genomData = genom;
                 // console.dir(this.genomData);
                  this.genomForm.patchValue(this.genomData);
              },
              error => this.errorMessage = error
          );
      }
      else {
         console.dir(params);
      }
    });

  }
  private getPageData() { //data для селектів
    if(sessionStorage.getItem('data')){
        this.data = JSON.parse(sessionStorage.getItem('data'));
    } else{
        this.service.getPageData().subscribe(
            data => {
                this.data = data;
                sessionStorage.setItem('data', JSON.stringify(data));
            },
            error => this.errorMessage = error
        );
    } 
  }
  
  public onSubmit(genomForm: FormGroup) {
    this.genomData.name = genomForm.value.name;
    this.genomData.locus = genomForm.value.locus;
    this.genomData.taxId = genomForm.value.taxId;
    this.genomData.division_id = genomForm.value.division_id;
    this.genomData.genus_id = genomForm.value.genus_id;
    this.genomData.species_id = genomForm.value.species_id;
    this.genomData.title = genomForm.value.title;
    this.genomData.flag_CAI = genomForm.value.flag_CAI;
    this.genomData.status = genomForm.value.status;


    if (this.genomData.genom_id) {
        this.service.updateGenom(this.genomData)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    } /*else {
        this.service.addGenomt(this.genomData)
            .subscribe(
            () => this.goBack(),
            error => this.errorMessage = error
            );
    }*/
  }

  public goBack() {
    //console.log(this.router);
  //  this.router.navigate(["admin-panel/genom"]);
    this.router.navigate(["../"], {relativeTo: this.activatedRoute});
  }


  public checkError(element: string, errorType: string) {
    return this.genomForm.get(element).hasError(errorType) &&
        this.genomForm.get(element).touched
  }
  //formControlName двостороння привязка
  private buildForm() {
    this.genomForm = this.fb.group({
        name: ["", Validators.required],
        locus: ["", Validators.required],
        taxId: ["", Validators.required],
        division_id: ["", Validators.required],
        genus_id: ["", Validators.required],
        species_id: ["", Validators.required],
        title: ["", Validators.required],
        flag_CAI: ["", Validators.required],
        status: ["", Validators.required],
    });
}

}
