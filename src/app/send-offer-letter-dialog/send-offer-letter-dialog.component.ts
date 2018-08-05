import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../node_modules/@angular/material';
import { TutorService } from '../../services/tutor.service';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-send-offer-letter-dialog',
  templateUrl: './send-offer-letter-dialog.component.html',
  styleUrls: ['./send-offer-letter-dialog.component.css']
})
export class SendOfferLetterDialogComponent implements OnInit {

  feedback = new FormControl();
  rating = new FormControl();

  constructor(public dialogRef: MatDialogRef<SendOfferLetterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: TutorService) { }

  ngOnInit() {
  }

  sendOfferLetter(){
    this.service.sendOfferLetter(this.data.tutor, this.feedback.value, this.rating.value).then(data => {
      this.dialogRef.close();
    })
  }

}
