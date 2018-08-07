import { Component, OnInit } from '@angular/core';
import { TutorService } from '../../services/tutor.service';
import { Tutor } from '../../models/tutor';
import { FormControl } from '../../../node_modules/@angular/forms';
import { Sort } from '../../../node_modules/@angular/material';

@Component({
  selector: 'app-whatsapp-group-created',
  templateUrl: './whatsapp-group-created.component.html',
  styleUrls: ['./whatsapp-group-created.component.css']
})
export class WhatsappGroupCreatedComponent implements OnInit {

  tutors: Tutor[];

  sortedData: Tutor[];

  subject = new FormControl();

  filterargs = { subjectAssigned: "" }

  expandState: boolean = false;
  tutorToExpand: Tutor;
  availability = new FormControl();

  constructor(private service: TutorService) {
    this.subject.valueChanges.subscribe(data => {
      this.filterargs = { subjectAssigned: this.subject.value }
    });
  }

  ngOnInit() {
    this.service.getStatusTutors('Whatsapp Group Created').subscribe(data => {
      console.log(data);
      this.tutors = data;
      this.sortedData = this.tutors.slice();
    })
  }

  hire(tutor){
    this.service.finallyHire(tutor, this.availability.value);
    this.availability.setValue('');
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
        case 'subjectAssigned': return compare(a.tutorName, b.tutorName, isAsc);
        default: return 0;
      }
    });
  }

  expandDetails(tutor) {
    this.expandState = true;
    this.tutorToExpand = tutor;
  }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}