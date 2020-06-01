import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage: Storage) {
    // tslint:disable-next-line:no-unused-expression
    this.hasUser() && this.setSubject();
  }

  private subject = new BehaviorSubject<any>(null);

  insert(user: User){
    this.storage.set('user', user);
  }
  update(user: User) {
    return this.save('user', user);
  }

  private save(key: string, user: User) {
    return this.storage.set(key, user);
  }

  private setSubject(){
    const userStore = this.storage.get('user');
    this.subject.next(userStore);
  }

  getUser(){
    return this.subject;
  }

  hasUser(){
    return !! this.storage.get('user');
  }

  updateMoeda(val){
    console.log(val);
    this.storage.set('moeda', val);
    this.storage.get('moeda').then(moeda => console.log(moeda));
  }

  getMoeda(){
    this.storage.get('moeda').then(moeda => console.log(moeda));
    return this.storage.get('moeda');
  }
}
