import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl } from '../../../node_modules/@angular/forms';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor';

@Component({
  selector: 'app-change-status-dialog',
  templateUrl: './change-status-dialog.component.html',
  styleUrls: ['./change-status-dialog.component.css']
})
export class ChangeStatusDialogComponent implements OnInit {

  statuses: string[] = ['abcd']

  newStatus = new FormControl();

  tutor: Tutor;

  constructor(public dialogRef: MatDialogRef<ChangeStatusDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private tutorService: TutorService) { }

  ngOnInit() {
    if(this.data.componentFrom == 'CV Not Submitted'){
      this.statuses = ['CV Not Submitted', 'CV Submitted'];
    }
  }

  saveStatus(){
    console.log(this.data);
    this.tutor = this.data.tutor;
    this.tutor.applicationStatus = this.newStatus.value;
    this.tutorService.updateTutorStatus(this.tutor);
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
