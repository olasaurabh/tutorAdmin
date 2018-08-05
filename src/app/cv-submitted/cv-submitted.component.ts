import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ChangeStatusDialogComponent } from '../change-status-dialog/change-status-dialog.component';

@Component({
  selector: 'app-cv-submitted',
  templateUrl: './cv-submitted.component.html',
  styleUrls: ['./cv-submitted.component.css']
})
export class CvSubmittedComponent implements OnInit {

  tutors: Tutor[]= [];
  dataSource = new MatTableDataSource(this.tutors);
  expandState: boolean = false;
  tutorToExpand: Tutor;

  displayedColumns: string[] = ['date', 'name', 'email', 'phoneNumber', 'gender', 'experience', 'departmentSubjects', 'otherSubjects', 'college', 'degree', 'department', 'currentSemester', 'yearOfPassing', 'cgpa', 'why'];

  constructor(private tutorService: TutorService, public dialog: MatDialog) { }

  ngOnInit() {
    this.tutorService.getCVSubmittedTutors().subscribe(data => {
      console.log(data);
      this.tutors = data;
      this.dataSource = new MatTableDataSource(this.tutors);
    })
  }

  changeStatus(row){
    const dialogRef = this.dialog.open(ChangeStatusDialogComponent, {
      width: '504px',
      data: {tutor: row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  expandDetails(tutor){
    this.expandState = true;
    this.tutorToExpand = tutor;
  }

  applicationAccepted(tutor){
    this.tutorService.acceptApplication(tutor);
  }

  applicationRejected(tutor){
    this.tutorService.rejectApplication(tutor);
  }

}
