import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GenomViewComponent } from "./genom-view.component";

describe("GenomViewComponent", () => {
  let component: GenomViewComponent;
  let fixture: ComponentFixture<GenomViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenomViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenomViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
