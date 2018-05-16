import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GenomListComponent } from "./genom-list.component";

describe("GenomListComponent", () => {
  let component: GenomListComponent;
  let fixture: ComponentFixture<GenomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
