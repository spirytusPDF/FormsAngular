import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-reactive-form',
  styleUrl: './reactive-form.css',
  templateUrl: './reactive-form.html',
})
export class ReactiveForm {
    myForm:FormGroup=new FormGroup({
      password:new FormControl('', [Validators.required, this.customPasswordValidator]),
      date:new FormControl('01/01/2000', [Validators.required, this.customDateValidator])
  });
  
  customPasswordValidator(form: AbstractControl): ValidationErrors | null {
    if (/[a-z]/.test(form.value) && /[A-Z]/.test(form.value)&&/[0-9]/.test(form.value)) {
        return null;
    }
    else
    return { "wrong": true };
  }
  customDateValidator(form: AbstractControl): ValidationErrors | null {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (dateRegex.test(form.value)) {
        return null;
    }
    else
    return { "wrong": true };
  }

  
}
