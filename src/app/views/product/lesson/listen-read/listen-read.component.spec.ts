import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenReadComponent } from './listen-read.component';

describe('ListenReadComponent', () => {
  let component: ListenReadComponent;
  let fixture: ComponentFixture<ListenReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
