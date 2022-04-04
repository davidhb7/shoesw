import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@auth/services/auth.services';
import { ACTIONS } from '@shared/constants/constants';
import { ApiError, UserCredentials, User } from '@supabase/supabase-js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


export interface OptionsForm{
  id:string;
  label: string;
}

interface UserReponse extends User, ApiError{ }

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  authForm !: FormGroup;
  signIn =ACTIONS.signIn;
  @Input()options !: OptionsForm;


  constructor(
    private readonly authSvc: AuthService,
    private readonly fb: FormBuilder,
    private readonly router : Router,
    private readonly toastSvc: ToastrService
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmit(): Promise<void>{
    //console.log('Save', this.authForm.value);
    //this.authSvc.signUp(this.authForm.value);
    const credentials: UserCredentials= this.authForm.value;
    let actionToCall=this.authSvc.signUp(credentials);

    if(this.options.id === ACTIONS.signIn){
      actionToCall=this.authSvc.signIn(credentials);
    }
    /*
    else{
      actionToCall = this.authSvc.signUp(credentials);
    }
    */
    try {
      const result = await actionToCall as UserReponse;
      if(result.email){
        //redireccionamiento a inicio/home
        this.redirectUser();
        //console.log('home ->');
      }
      else{
        //notificacion
        this.toastSvc.info(result.message, 'Info');
        //console.log('notificacion ->');
      }
    } catch (error) {
      console.log(error);
    }
  }
  private initForm():void{
    this.authForm=this.fb.group({
      email:['', Validators.required],
      password:['',Validators.required]
    })
  }

  private redirectUser():void{
    this.router.navigate(['/home']);
  }
}
