import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefifteenComponent } from './pagefifteen.component';

describe('PagefifteenComponent', () => {
  let component: PagefifteenComponent;
  let fixture: ComponentFixture<PagefifteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagefifteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefifteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
