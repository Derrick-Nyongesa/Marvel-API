import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenineComponent } from './pagenine.component';

describe('PagenineComponent', () => {
  let component: PagenineComponent;
  let fixture: ComponentFixture<PagenineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
