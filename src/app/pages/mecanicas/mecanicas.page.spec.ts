import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MecanicasPage } from './mecanicas.page';

describe('MecanicasPage', () => {
  let component: MecanicasPage;
  let fixture: ComponentFixture<MecanicasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
