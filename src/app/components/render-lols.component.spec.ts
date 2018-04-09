import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderLolsComponent } from './render-lols.component';

describe('RenderLolsComponent', () => {
  let component: RenderLolsComponent;
  let fixture: ComponentFixture<RenderLolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderLolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderLolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
