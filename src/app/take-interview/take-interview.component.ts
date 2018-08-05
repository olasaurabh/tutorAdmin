import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor';
import { FormControl } from '../../../node_modules/@angular/forms';
import { MatDialog } from '../../../node_modules/@angular/material';
import { RejectDialogComponent } from '../reject-dialog/reject-dialog.component';
import { AssignmentToBeSentDialogComponent } from '../assignment-to-be-sent-dialog/assignment-to-be-sent-dialog.component';

@Component({
  selector: 'app-take-interview',
  templateUrl: './take-interview.component.html',
  styleUrls: ['./take-interview.component.css']
})
export class TakeInterviewComponent implements OnInit {

  tutors: Tutor[]= [];
  expandState: boolean = false;
  tutorToExpand: Tutor;
  querySolution = new FormControl();

  constructor(private tutorService: TutorService, private dialog: MatDialog) { }

  ngOnInit() {
    this.tutorService.getInterviewTutors().subscribe(data => {
      console.log(data);
      this.tutors = data;
    })
  }

  expandDetails(tutor){
    this.expandState = true;
    this.tutorToExpand = tutor;
  }

  updateQuerySolution(tutor){
    this.tutorService.updateQuerySolution(tutor, this.querySolution.value);
  }

  applicationRejected(tutor){
    const dialogRef = this.dialog.open(RejectDialogComponent, {
      width: '500px',
      data: {tutor: tutor}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  callNotConnected(tutor){
    this.tutorService.callNotConnected(tutor).then(data => {
      console.log(data);
    })
  }

  applicationAccepted(tutor){
    const dialogRef = this.dialog.open(AssignmentToBeSentDialogComponent, {
      width: '500px',
      data: {tutor: tutor}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
}
