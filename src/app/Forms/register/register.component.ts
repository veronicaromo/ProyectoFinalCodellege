import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//Aquí va el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, /*private MedicosService:MedicosService, private router:Router*/) { 
    
  }

  registerForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    author: ['', [Validators.required, Validators.minLength(4)]],
    genre: ['', [Validators.required]],
    year: ['', [Validators.required]],
    pages: ['', [Validators.required]],
    description: ['', Validators.required],
    price: ['', [Validators.required]],
    units: ['', [Validators.required]]
  })


  

  ngOnInit(): void {
  }

  submit(){
    if(this.registerForm.valid){
      console.log("Válido");
      console.log(this.registerForm.value);
      //this.agregar();
    }
    else{
      console.log("Inválido");
    }

  }

  limpiar(){
    this.registerForm.patchValue({
      title: '',
      author: '',
      genre: '',
      year: '',
      pages: '',
      description: '',
      price: '',
      units: ''
    })
  }

  //Get
  get title(){return this.registerForm.get('title')}
  get author(){return this.registerForm.get('author')}
  get genre(){return this.registerForm.get('year')}
  get year(){return this.registerForm.get('pages')}
  get price(){return this.registerForm.get('price')}

  //Agregar
  

}
