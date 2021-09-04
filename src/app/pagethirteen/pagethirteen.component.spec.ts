import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagethirteenComponent } from './pagethirteen.component';

describe('PagethirteenComponent', () => {
  let component: PagethirteenComponent;
  let fixture: ComponentFixture<PagethirteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagethirteenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagethirteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
