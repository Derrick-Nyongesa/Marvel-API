import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetwelveComponent } from './pagetwelve.component';

describe('PagetwelveComponent', () => {
  let component: PagetwelveComponent;
  let fixture: ComponentFixture<PagetwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagetwelveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
