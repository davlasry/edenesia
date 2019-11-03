import { Action, createReducer, on } from '@ngrx/store';
import * as requestActions from './request.actions';

import * as moment from 'moment';

export interface IFormValue {
  isDatePlanned: boolean;
  departureDate: string;
  arrivalDate: string;
  airport: string;
  estimateMonth: string;
  estimateDays: number;
  destinations: string[];
  numberPeople: number;
  purpose: string[];
  hotelType: string[];
  activities: string[];
}

export interface RequestState {
  formValue: any;
  isValid: boolean;
  currentStepIndex: number;
  currentValidationErrors: any[];
}

export const initialState: RequestState = {
  formValue: {
    isDatePlanned: false,
    departureDate: moment(new Date())
      .add(1, 'days')
      .format('DD/MM/YYYY'),
    arrivalDate: moment(new Date())
      .add(5, 'days')
      .format('DD/MM/YYYY'),
    airport: '',
    estimateMonth: '',
    estimateDays: null,
    destinations: [],
    numberPeople: 1,
    purpose: [],
    hotelType: [],
    activities: []
  },
  isValid: false,
  currentStepIndex: 0,
  currentValidationErrors: []
};

const featureReducer = createReducer(
  initialState,
  on(requestActions.SetCurrentIndex, (state, { currentStepIndex }) => ({
    ...state,
    currentStepIndex,
    currentValidationErrors: []
  })),
  on(
    requestActions.SetFormValue,
    (state, { stepValues, validationErrors }) => ({
      ...state,
      formValue: { ...state.formValue, ...stepValues },
      currentValidationErrors: validationErrors
    })
  )
);

export function requestReducer(
  state: RequestState | undefined,
  action: Action
) {
  return featureReducer(state, action);
}