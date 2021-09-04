import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesixteenComponent } from './pagesixteen.component';

describe('PagesixteenComponent', () => {
  let component: PagesixteenComponent;
  let fixture: ComponentFixture<PagesixteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesixteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesixteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
