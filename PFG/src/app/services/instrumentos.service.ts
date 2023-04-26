import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'; 
import Instrumento from "src/app/interfaces/instrumento.interface"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {

  constructor(private firestore:Firestore) { }

  getInstru(): Observable<Instrumento[]>{
    const instruRef = collection(this.firestore, "instrumentos");
    return collectionData(instruRef, { idField: 'id' }) as Observable<Instrumento[]>;
  }


}
