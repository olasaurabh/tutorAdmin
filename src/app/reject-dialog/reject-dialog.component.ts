import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { TutorService } from '../../services/tutor.service';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-reject-dialog',
  templateUrl: './reject-dialog.component.html',
  styleUrls: ['./reject-dialog.component.css']
})
export class RejectDialogComponent implements OnInit {

  reasons: string[] = [
    'sdasdsadas',
    'sdasdasdas',
    'asdasdasdasd'
  ];

  rejectedReason = new FormControl();

  constructor(public dialogRef: MatDialogRef<RejectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: TutorService) { }

  ngOnInit() {
  }

  rejectTutor(){
    this.service.rejectTutor(this.data.tutor, this.rejectedReason.value)
    .then(data => {
      this.dialogRef.close();
    })
  }

}
