import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adiciona o CUSTOM_ELEMENTS_SCHEMA
})
export class AppComponent {
  title = 'ConversorMoedas';
}
