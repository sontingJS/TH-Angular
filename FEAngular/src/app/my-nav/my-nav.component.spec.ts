import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNAVComponent } from './my-nav.component';

describe('MyNAVComponent', () => {
  let component: MyNAVComponent;
  let fixture: ComponentFixture<MyNAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNAVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
