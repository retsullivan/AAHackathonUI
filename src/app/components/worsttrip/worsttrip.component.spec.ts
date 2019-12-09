import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorsttripComponent } from './worsttrip.component';

describe('WorsttripComponent', () => {
  let component: WorsttripComponent;
  let fixture: ComponentFixture<WorsttripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorsttripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorsttripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
