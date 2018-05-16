import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaessageViewComponent } from "./maessage-view.component";

describe("MaessageViewComponent", () => {
  let component: MaessageViewComponent;
  let fixture: ComponentFixture<MaessageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaessageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaessageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
