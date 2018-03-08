import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';



  

 

  
    constructor(private cookieService: CookieService){
    
    }
  
    ngOnInit(): void {
      //Set cookies
      this.cookieService.set('cookieApp', 'Preparado para ver a Manoli' );
    
      window.localStorage.setItem("someKey", "La Manoli lo flipa!!");
      window.sessionStorage.setItem("trini","LA TRINI TAMBIEN!")
}
}
