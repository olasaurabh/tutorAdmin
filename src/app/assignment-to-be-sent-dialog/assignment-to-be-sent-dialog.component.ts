import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { TutorService } from '../../services/tutor.service';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-assignment-to-be-sent-dialog',
  templateUrl: './assignment-to-be-sent-dialog.component.html',
  styleUrls: ['./assignment-to-be-sent-dialog.component.css']
})
export class AssignmentToBeSentDialogComponent implements OnInit {

  assignedSubjects = new FormControl();

  constructor(public dialogRef: MatDialogRef<AssignmentToBeSentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: TutorService) { }

  ngOnInit() {
  }

  sendAssignment(){
    this.service.sendAssignment(this.data.tutor, this.assignedSubjects.value).then(data => {
      this.dialogRef.close();
    })
  }

}
