import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageelevenComponent } from './pageeleven.component';

describe('PageelevenComponent', () => {
  let component: PageelevenComponent;
  let fixture: ComponentFixture<PageelevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageelevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageelevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
