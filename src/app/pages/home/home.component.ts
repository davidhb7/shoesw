import { Component} from '@angular/core';//, OnInit

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  { //poner "implements OnInit" despues de homecomponent

  constructor() { }

  ngOnInit(): void { }

}
