import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisAllComponent } from './emojis-all.component';

describe('EmojisAllComponent', () => {
  let component: EmojisAllComponent;
  let fixture: ComponentFixture<EmojisAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojisAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
