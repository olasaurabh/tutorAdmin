import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor';
import { FormControl } from '../../../node_modules/@angular/forms';
import { Sort, MatDialog } from '../../../node_modules/@angular/material';
import { RejectDialogComponent } from '../reject-dialog/reject-dialog.component';
import { SendOfferLetterDialogComponent } from '../send-offer-letter-dialog/send-offer-letter-dialog.component';

@Component({
  selector: 'app-assignment-received',
  templateUrl: './assignment-received.component.html',
  styleUrls: ['./assignment-received.component.css']
})
export class AssignmentReceivedComponent implements OnInit {

  tutors: Tutor[];

  sortedData: Tutor[];

  subject = new FormControl();

  filterargs ={subjectAssigned: ""}

  constructor(private service: TutorService, private dialog: MatDialog) {
    this.subject.valueChanges.subscribe(data=>{
      this.filterargs = {subjectAssigned: this.subject.value}
    });
   }

  ngOnInit() {
    this.service.getStatusTutors('Assignment Received')
    .subscribe(data => {
      this.tutors = data;
      console.log(data)
      this.sortedData = this.tutors.slice();
    })
  }

  reject(tutor){
    const dialogRef = this.dialog.open(RejectDialogComponent, {
      width: '500px',
      data: {tutor: tutor}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

 sendOfferLetter(tutor: Tutor){
  const dialogRef = this.dialog.open(SendOfferLetterDialogComponent, {
    width: '500px',
    data: {tutor: tutor}
  });

  dialogRef.afterClosed().subscribe(result => {
    
  });
 }

  sortData(sort: Sort) {
    const data = this.tutors.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'subjectAssigned': return compare(a.subjectAssigned, b.subjectAssigned, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

