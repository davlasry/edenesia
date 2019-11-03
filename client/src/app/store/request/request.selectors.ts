import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RequestState } from './request.reducer';

export const getRequestState = createFeatureSelector<RequestState>('request');

export const getCurrentStepIndex = createSelector(
  getRequestState,
  (requestState: RequestState): number => requestState.currentStepIndex
);

export const getCurrentValidationErrors = createSelector(
  getRequestState,
  (requestState: RequestState): any[] => {
    const stepValidationValues = Object.values(
      requestState.currentValidationErrors
    );
    return stepValidationValues.filter(val => val.isValid === false);
  }
);

export const getFormValue = createSelector(
  getRequestState,
  (requestState: RequestState): any => requestState.formValue
);