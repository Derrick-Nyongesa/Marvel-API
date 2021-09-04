import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetenComponent } from './pageten.component';

describe('PagetenComponent', () => {
  let component: PagetenComponent;
  let fixture: ComponentFixture<PagetenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
