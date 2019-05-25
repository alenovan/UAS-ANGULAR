import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    registerForm: FormGroup;
    public name: string ;
    public contact: number ;
    public email: string ;
    id: string;
    isHidden: boolean = true;
    friend: Array<{name: string,email: string, contact: number}> = []; 
    showNew: Boolean = true;
    submitType: string = 'Add Friend';
    selectedRow: number;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { 
         this.friend;
         this.id = localStorage.getItem('token');
            if(this.id == "admin"){
                this.isHidden = false;
            }else{
                this.isHidden = true;
            }
            // alert(this.isHidden);
    }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
            contact: ['', Validators.required],
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
            this.friend.push({name:this.name, email:this.email,contact:this.contact});
            alert("data anda telah masuk");
             this.friend[this.selectedRow].name = this.name;
             this.friend[this.selectedRow].email = this.email;
             this.friend[this.selectedRow].contact = this.contact;
        }


    }

    onView(){

    }
 
  

}
