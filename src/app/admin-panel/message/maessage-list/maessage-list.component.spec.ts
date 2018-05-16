import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MaessageListComponent } from "./maessage-list.component";

describe("MaessageListComponent", () => {
  let component: MaessageListComponent;
  let fixture: ComponentFixture<MaessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
