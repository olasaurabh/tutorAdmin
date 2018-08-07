import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '../../../node_modules/@angular/material';
import { TutorService } from '../../services/tutor.service';
import { FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-create-whatsapp-group-dialog',
  templateUrl: './create-whatsapp-group-dialog.component.html',
  styleUrls: ['./create-whatsapp-group-dialog.component.css']
})
export class CreateWhatsappGroupDialogComponent implements OnInit {

  tutorName = new FormControl();
  books = new FormControl();
  group = new FormControl();
  dataNumber: number = 0;

  constructor(public dialogRef: MatDialogRef<CreateWhatsappGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: TutorService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  submitDetails(){
    this.dataNumber = 0;
    this.service.getNickNameTutor(this.tutorName.value).subscribe(data=>{
      if(data.length != 0 && this.dataNumber == 0){
        this.snackBar.open("Name Already Exists", '', {duration: 500});
      }else{
        this.hireTutor();
        this.dataNumber = 1
      }
    })
  }

  hireTutor(){
    this.service.hireTutor(this.data.tutor, this.tutorName.value, this.group.value, this.books.value).then(data=> {
      this.dialogRef.close();
    });
  }

}
