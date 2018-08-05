import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor';
import { FormControl } from '../../../node_modules/@angular/forms';
import { Sort } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-offer-letter-sent',
  templateUrl: './offer-letter-sent.component.html',
  styleUrls: ['./offer-letter-sent.component.css']
})
export class OfferLetterSentComponent implements OnInit {

  tutors: Tutor[];

  sortedData: Tutor[];

  subject = new FormControl();

  filterargs = { emailId: "" }

  constructor(private service: TutorService) {
    this.subject.valueChanges.subscribe(data => {
      this.filterargs = { emailId: this.subject.value }
    });
  }

  ngOnInit() {
    this.service.getStatusTutors('Offer Letter Sent').subscribe(data => {
      this.tutors = data;
      console.log(data);
      this.sortedData = this.tutors.slice();
    })
  }

  receivedOfferLetter(tutor){
    this.service.updateApplicationStatus(tutor, 'Offer Letter Received');
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