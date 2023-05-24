import { Injectable,  } from '@angular/core';
import { Firestore, collection, collectionData, query, where, doc, getDocs, addDoc, updateDoc} from '@angular/fire/firestore'; 
import Usuario from "src/app/interfaces/usuario.interface"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
 
export class UsuariosService {

  constructor(private firestore:Firestore) { }

  getUsuario(): Observable<Usuario[]>{
    const usuarioRef = collection(this.firestore, "usuarios");
    return collectionData(usuarioRef, { idField: 'id' }) as Observable<Usuario[]>;
  }

  async addUsuario(email:string,accesoPart:boolean){
    const usuariosRef = collection(this.firestore, "usuarios")
    const querySnapshot = await getDocs(query(usuariosRef, where("email","==",email)))
    if(querySnapshot.empty){//hacer que si ya existe el email no cree otro usuario
      await addDoc(collection(this.firestore, "usuarios"),{
        email:email,
        accesoPart:accesoPart
      });
      console.log("Usuario añadido exitosamente.");
    }else {
      console.log("El email ya existe. No se ha añadido ningún usuario.");
    } 
  }

  async updateUsuario(email: string, nuevoValor: boolean){
    if(email){
      const usuarioRef = collection(this.firestore, "usuarios");
      const querySnapshot = await getDocs(query(usuarioRef, where("email","==",email)))

      if(!querySnapshot.empty){
        const usuarioDoc = querySnapshot.docs[0];
        const usuarioDocRef = doc(usuarioRef, usuarioDoc.id)
        await updateDoc(usuarioDocRef, {
          accesoPart: nuevoValor
        });
        
        console.log("Campo actualizado exitosamente.");
      }
      else {
        console.log("No se encontró ningún usuario con el email proporcionado.");
      }
    } 
    else {
      console.log("El email proporcionado es nulo.");
    }
  }
}
