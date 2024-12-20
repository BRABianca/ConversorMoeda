import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaConverterComponent } from './moeda-converter.component';

describe('MoedaConverterComponent', () => {
  let component: MoedaConverterComponent;
  let fixture: ComponentFixture<MoedaConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoedaConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedaConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
