import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'; 
import Chiste from 'src/app/interfaces/chiste.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChistesService {

  constructor(private firestore:Firestore) { }

  getChiste(): Observable<Chiste[]>{
    const chisteRef = collection(this.firestore, "chistes");
    return collectionData(chisteRef, { idField: 'id' }) as Observable<Chiste[]>;
  }
}
