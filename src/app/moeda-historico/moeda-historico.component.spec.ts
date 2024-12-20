import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedaHistoricoComponent } from './moeda-historico.component';

describe('MoedaHistoricoComponent', () => {
  let component: MoedaHistoricoComponent;
  let fixture: ComponentFixture<MoedaHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoedaHistoricoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
