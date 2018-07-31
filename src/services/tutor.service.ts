import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Tutor } from '../models/tutor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutorCollection: AngularFirestoreCollection<Tutor>;
  tutors: Observable<Tutor[]>;

  constructor(private afs: AngularFirestore) {
    this.tutorCollection = afs.collection<Tutor>('tutors');
    
    this.tutors = this.tutorCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getNewlyAppliedTutors(){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', 'CV Not Submitted')).valueChanges();
  }
}
