import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { ResultsComponent } from './results/results.component';
import { ActionsComponent } from './actions/actions.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/components/shared.module';
import { CharacterFrecuencyComponent } from './character-frecuency/character-frecuency.component';
import { SimilarEmailsComponent } from './similar-emails/similar-emails.component';



@NgModule({
  declarations: [PeopleComponent, ResultsComponent, ActionsComponent, CharacterFrecuencyComponent, SimilarEmailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PeopleComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PeopleModule { }
