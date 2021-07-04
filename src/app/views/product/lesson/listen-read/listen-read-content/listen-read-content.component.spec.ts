import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenReadContentComponent } from './listen-read-content.component';

describe('ListenReadContentComponent', () => {
  let component: ListenReadContentComponent;
  let fixture: ComponentFixture<ListenReadContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListenReadContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenReadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
