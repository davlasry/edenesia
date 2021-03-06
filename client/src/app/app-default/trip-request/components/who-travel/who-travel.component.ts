import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { numberPeopleOptions } from '../../data/numberOfPeople';

@Component({
  selector: 'app-who-travel',
  templateUrl: './who-travel.component.html',
  styleUrls: ['./who-travel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhoTravelComponent implements OnInit {
  @Input() numberPeople: number;
  @Output() pickedNumberPeople = new EventEmitter();

  stepValidationObject: any;
  numberPeopleOptions: any;

  constructor() {
    this.numberPeopleOptions = numberPeopleOptions;
  }

  ngOnInit() {
    this.stepValidationObject = {
      numberPeople: {
        message: 'You must pick an answer',
        isValid: this.numberPeople !== null
      }
    };

    this.pickedNumberPeople.emit({
      validationErrors: this.stepValidationObject
    });
  }

  onNumberPeopleChange(numberPeopleFromEvent) {
    console.log('numberPeopleFromEvent:', numberPeopleFromEvent);
    this.stepValidationObject.numberPeople.isValid =
      numberPeopleFromEvent !== null ? true : false;

    this.pickedNumberPeople.emit({
      stepValues: {
        numberPeople: numberPeopleFromEvent
      },
      validationErrors: this.stepValidationObject
    });
  }
}
