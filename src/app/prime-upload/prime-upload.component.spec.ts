import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeUploadComponent } from './prime-upload.component';

describe('PrimeUploadComponent', () => {
  let component: PrimeUploadComponent;
  let fixture: ComponentFixture<PrimeUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
