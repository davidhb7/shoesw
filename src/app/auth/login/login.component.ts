import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/dominio/cliente';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registroForm: FormGroup;

  constructor(
    private clienteService: ClienteServiceService,
    private builder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group ({
      email: '',
      password: ''
    });

    this.registroForm = this.builder.group ({
      nombre: '',
      apellidos: '',
      cedula: '',
      email: '',
      telefono: '',
      password: ''
    });

  }

  registroCliente(): void{
    let nombre = this.registroForm.controls.nombre.value;
    let apellidos = this.registroForm.controls.apellidos.value;
    let cedula = this.registroForm.controls.cedula.value;
    let telefono = this.registroForm.controls.telefono.value;
    let email = this.registroForm.controls.email.value;
    let pass = this.registroForm.controls.password.value;
    let cliente: Cliente = {
      nombre:nombre,
      apellidos:apellidos,
      cedula:cedula,
      email:email,
      telefono:telefono,
      contra: pass,
    };
    this.clienteService.crearCliente(cliente).subscribe(clie => {
      if(clie){
        Swal.fire(
          'Excelente!',
          'Te registraste care verga!',
          'success'
        )
      }
    })
  }

  loginCliente(): void{
    let email = this.loginForm.controls.email.value;
    let pass = this.loginForm.controls.password.value;
    let cliente: Cliente = {
      email: email,
      contra: pass
    }
    this.clienteService.consultarCliente(cliente).subscribe(clie => {
      if(clie){
        Swal.fire(
          'Excelente!',
          'Bienvenido!' + ' ' + clie.nombre + ' ' + clie.apellidos,
          'success'
        );
        this.router.navigate(['/home']);
      }
    })
  }

}
