import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefourteenComponent } from './pagefourteen.component';

describe('PagefourteenComponent', () => {
  let component: PagefourteenComponent;
  let fixture: ComponentFixture<PagefourteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagefourteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefourteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
