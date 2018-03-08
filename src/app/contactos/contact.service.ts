
import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Contacto } from './contacto';


import { QueryFn } from 'angularfire2/database/interfaces';
 
@Injectable()
export class ContactService { 
 
  private dbPath = '/contactos';
 
  contactosRef: AngularFireList<Contacto> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.contactosRef = db.list(this.dbPath);
  }
 
  createCustomer(contacto: Contacto): void {
    this.contactosRef.push(contacto);
  }
 
  getCustomersList(): AngularFireList<Contacto> {
    return this.contactosRef;
  }
 
  
 
  private handleError(error) {
    console.log(error);
  }
}