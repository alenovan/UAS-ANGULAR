import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	registerForm: FormGroup;
    public name: string ;
    public message: string ;
    public email: string ;

    friend: Array<{name: string,email: string, message: string}> = []; 
    showNew: Boolean = true;
    submitType: string = 'Submit';
    selectedRow: number;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { 
         this.friend;
    }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
            message: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    get f() { return this.registerForm.controls; }


    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            alert("Pastikan data terisi semua");
            return;
        }else{
            this.friend.push({name:this.name, email:this.email,message:this.message});
            alert("data anda telah masuk");
             this.friend[this.selectedRow].name = this.name;
             this.friend[this.selectedRow].email = this.email;
             this.friend[this.selectedRow].message = this.message;
        }


    }

    onView(){

    }
 
  

}

