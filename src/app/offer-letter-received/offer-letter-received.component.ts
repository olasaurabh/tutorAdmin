import { Component, OnInit } from '@angular/core';
import { Tutor } from '../../models/tutor';
import { FormControl } from '../../../node_modules/@angular/forms';
import { TutorService } from '../../services/tutor.service';
import { Sort, MatDialog } from '../../../node_modules/@angular/material';
import { CreateWhatsappGroupDialogComponent } from '../create-whatsapp-group-dialog/create-whatsapp-group-dialog.component';

@Component({
  selector: 'app-offer-letter-received',
  templateUrl: './offer-letter-received.component.html',
  styleUrls: ['./offer-letter-received.component.css']
})
export class OfferLetterReceivedComponent implements OnInit {

  tutors: Tutor[];

  sortedData: Tutor[];

  subject = new FormControl();

  filterargs = { subjectAssigned: "" }

  constructor(private service: TutorService, public dialog: MatDialog) {
    this.subject.valueChanges.subscribe(data => {
      this.filterargs = { subjectAssigned: this.subject.value }
    });
  }

  ngOnInit() {
    this.service.getStatusTutors('Offer Letter Received').subscribe(data => {
      this.tutors = data;
      console.log(data);
      this.sortedData = this.tutors.slice();
    })
  }

  hire(tutor){
    const dialogRef = this.dialog.open(CreateWhatsappGroupDialogComponent, {
      width: '500px',
      data: {tutor:tutor}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
        case 'subjectAssigned': return compare(a.firstName, b.firstName, isAsc);
        default: return 0;
      }
    });
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}