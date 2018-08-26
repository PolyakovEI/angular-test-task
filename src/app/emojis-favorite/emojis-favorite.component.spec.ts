import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisFavoriteComponent } from './emojis-favorite.component';

describe('EmojisFavoriteComponent', () => {
  let component: EmojisFavoriteComponent;
  let fixture: ComponentFixture<EmojisFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojisFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojisFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
