import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//////Angular Material Imports Start
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
//////angular material Import End

import { CvNotSubmittedComponent } from './cv-not-submitted/cv-not-submitted.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CvSubmittedComponent } from './cv-submitted/cv-submitted.component';
import { ChangeStatusDialogComponent } from './change-status-dialog/change-status-dialog.component';
import { TakeInterviewComponent } from './take-interview/take-interview.component';
import { RejectDialogComponent } from './reject-dialog/reject-dialog.component';
import { AssignmentToBeSentDialogComponent } from './assignment-to-be-sent-dialog/assignment-to-be-sent-dialog.component';
import { CallNotConnectedComponent } from './call-not-connected/call-not-connected.component';
import { AssignmentToBeSentComponent } from './assignment-to-be-sent/assignment-to-be-sent.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AssignmentSentComponent } from './assignment-sent/assignment-sent.component';
import { AssignmentReceivedComponent } from './assignment-received/assignment-received.component';
import { SendOfferLetterDialogComponent } from './send-offer-letter-dialog/send-offer-letter-dialog.component';
import { OfferLetterSentComponent } from './offer-letter-sent/offer-letter-sent.component';
import { GmailFilterPipe } from './pipes/gmail-filter.pipe';
import { SendOfferLetterComponent } from './send-offer-letter/send-offer-letter.component';


const appRoutes: Routes = [
  {
    path: 'cvNotSubmitted',
    component: CvNotSubmittedComponent,
  },
  {
    path: 'cvSubmitted',
    component: CvSubmittedComponent,
  },
  {
    path: 'takeInterview',
    component: TakeInterviewComponent,
  },
  {
    path: 'callNotConnected',
    component: CallNotConnectedComponent,
  },
  {
    path: 'assignmentToBeSent',
    component: AssignmentToBeSentComponent,
  },
  {
    path: 'assignmentSent',
    component: AssignmentSentComponent,
  },
  {
    path: 'assignmentReceived',
    component: AssignmentReceivedComponent,
  },
  {
    path: 'sendOfferLetter',
    component: SendOfferLetterComponent,
  },
  {
    path: 'offerLetterSent',
    component: OfferLetterSentComponent,
  },
  {
    path: '',
    redirectTo: '/cvNotSubmitted',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CvNotSubmittedComponent,
    PageNotFoundComponent,
    CvSubmittedComponent,
    ChangeStatusDialogComponent,
    TakeInterviewComponent,
    RejectDialogComponent,
    AssignmentToBeSentDialogComponent,
    CallNotConnectedComponent,
    AssignmentToBeSentComponent,
    FilterPipe,
    AssignmentSentComponent,
    AssignmentReceivedComponent,
    SendOfferLetterDialogComponent,
    OfferLetterSentComponent,
    GmailFilterPipe,
    SendOfferLetterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features

    FormsModule,
    ReactiveFormsModule,

    //////Angular Material Imports Start
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    //////angular material Import End

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ChangeStatusDialogComponent,
    RejectDialogComponent,
    AssignmentToBeSentDialogComponent,
    SendOfferLetterDialogComponent
  ]
})
export class AppModule {

}
