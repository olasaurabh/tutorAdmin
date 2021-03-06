import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ChangeStatusDialogComponent } from '../change-status-dialog/change-status-dialog.component';

@Component({
  selector: 'app-cv-not-submitted',
  templateUrl: './cv-not-submitted.component.html',
  styleUrls: ['./cv-not-submitted.component.css']
})

export class CvNotSubmittedComponent implements OnInit {

  tutors: Tutor[]= [];
  dataSource = new MatTableDataSource(this.tutors);

  displayedColumns: string[] = ['date', 'name', 'email', 'phoneNumber', 'query'];

  constructor(private tutorService: TutorService, public dialog: MatDialog) { }

  ngOnInit() {
    this.tutorService.getNewlyAppliedTutors().subscribe(data => {
      console.log(data);
      this.tutors = data;
      this.dataSource = new MatTableDataSource(this.tutors);
    })
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeStatus(row){
    const dialogRef = this.dialog.open(ChangeStatusDialogComponent, {
      width: '504px',
      data: {tutor: row, componentFrom: 'CV Not Submitted'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
