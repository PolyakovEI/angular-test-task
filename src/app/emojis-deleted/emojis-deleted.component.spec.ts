import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisDeletedComponent } from './emojis-deleted.component';

describe('EmojisDeletedComponent', () => {
  let component: EmojisDeletedComponent;
  let fixture: ComponentFixture<EmojisDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojisDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
