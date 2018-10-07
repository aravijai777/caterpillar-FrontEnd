import { TestBed } from '@angular/core/testing';

import { AddSurveyService } from './add-survey.service';

describe('AddSurveyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddSurveyService = TestBed.get(AddSurveyService);
    expect(service).toBeTruthy();
  });
});
