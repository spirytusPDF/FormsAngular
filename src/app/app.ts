import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormOne } from './form-one/form-one';
import { ReactiveForm } from './reactive-form/reactive-form';

@Component({
  imports: [RouterOutlet, FormOne, ReactiveForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('FormsHomework');
}
