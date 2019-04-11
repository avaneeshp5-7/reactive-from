import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  title = 'reactive-form';
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(){ 
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      contact: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(16)]]
  });
  }
  get f() { return this.registerForm.controls;}
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}
