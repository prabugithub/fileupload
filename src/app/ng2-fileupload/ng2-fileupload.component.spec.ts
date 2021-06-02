import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2FileuploadComponent } from './ng2-fileupload.component';

describe('Ng2FileuploadComponent', () => {
  let component: Ng2FileuploadComponent;
  let fixture: ComponentFixture<Ng2FileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2FileuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2FileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
