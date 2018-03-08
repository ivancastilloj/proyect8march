import { Component, OnInit , ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { ContactService } from './contact.service';
import { Contacto } from './contacto';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AngularFireDatabase]
})
export class ContactosComponent implements OnInit {
  contacto: Contacto = new Contacto();
  submitted = false;

 
  constructor(private contactoService: ContactService, private http: HttpClient, private router: Router) {}
 
  ngOnInit() {
  }
 
  newContacto(): void {
    this.submitted = false;
    this.contacto = new Contacto();
  }
 
  save() {
    this.contactoService.createCustomer(this.contacto);
    this.contacto = new Contacto();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
  