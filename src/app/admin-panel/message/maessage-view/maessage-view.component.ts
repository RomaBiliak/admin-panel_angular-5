import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Message } from "../service/message";
import { MessageService } from "../service/message.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";//для обробки форми
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-maessage-view",
  templateUrl: "./maessage-view.component.html",
  styleUrls: ["./maessage-view.component.css"]
})
export class MaessageViewComponent implements OnInit {
  message: Message;
 // errorMessage: String;
  messageForm: FormGroup;

  constructor(private service: MessageService,
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { 
      this.titleService.setTitle( 'Повідомлення' );
  }

  ngOnInit() {
    this.buildForm();
    this.getMessage();
  }
  private getMessage() {
    this.activatedRoute.params.forEach((params: Params) => {
      let message_id = params["message_id"];
      if (message_id) { 
          this.service.getMessage(message_id).subscribe(
           message => {
                  this.message = message;
                  //console.dir(this.message);
              },
             // error => this.errorMessage = error
          );
      }
      else {
         console.dir(params);
      }
    });
  }

  public onSubmit(messageForm: FormGroup) {

    if (this.message.message_id) {
        this.service.sendAnswer(this.message.message_id, messageForm.value.answer)
            .subscribe(
            () => this.goBack(),
            //error => this.errorMessage = error
          );
    } 
  }

  public goBack() {
    this.router.navigate(["../"], {relativeTo: this.activatedRoute});
  }


  public checkError(element: string, errorType: string) {
    return this.messageForm.get(element).hasError(errorType) &&
        this.messageForm.get(element).touched
  }
  //formControlName двостороння привязка
  private buildForm() {
    this.messageForm = this.fb.group({
        answer: ["", Validators.required]
    });
}

}
