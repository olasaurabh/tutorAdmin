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
  tutorDoc: AngularFirestoreDocument<Tutor>;

  constructor(private afs: AngularFirestore) {
    this.tutorCollection = afs.collection<Tutor>('tutors');
    
    this.tutors = this.tutorCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  getNewlyAppliedTutors(){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', 'CV Not Submitted')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  getCVSubmittedTutors(){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', 'CV Submitted')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  getCallNotConnectedTutors(){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', 'Call Not Connected')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  getAssignmentToBeSentTutors(){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', 'Assignment To Be Sent')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  getAssignmentSentTutors(){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', 'Assignment Sent')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  getStatusTutors(status: string){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', status)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  updateTutorStatus(tutor: Tutor){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: tutor.applicationStatus})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  acceptApplication(tutor: Tutor){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: 'Take Interview'})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  rejectApplication(tutor: Tutor){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: 'Rejected'})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  getInterviewTutors(){
    return this.afs.collection('tutors', ref=> ref.where('applicationStatus', '==', 'Take Interview')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      }))
    );
  }

  updateQuerySolution(tutor: Tutor, solution: string){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({solution: solution})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  callNotConnected(tutor: Tutor){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: 'Call Not Connected', interviewedOn: Date.now()})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  rejectTutor(tutor: Tutor, reason: string){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: 'Rejected', interviewedOn: Date.now(), rejectedReason: reason})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  sendAssignment(tutor: Tutor, subjects: string){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: 'Assignment To Be Sent', interviewedOn: Date.now(), subjectAssigned: subjects})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  updateApplicationStatus(tutor: Tutor, status: string){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: status})
    .then(data => {
      console.log(data);
      return data;
    })
  }

  sendOfferLetter(tutor: Tutor, feedback: string, rating: number){
    this.tutorDoc = this.afs.doc<Tutor>('tutors/' + tutor.id);
    return this.tutorDoc.update({applicationStatus: 'Send Offer Letter', feedbackForAssignment: feedback, initialRating: rating})
    .then(data => {
      console.log(data);
      return data;
    })
  }
}
