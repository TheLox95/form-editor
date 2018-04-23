import { TestBed, inject } from '@angular/core/testing';

import { HtmlComponentsService } from './html-components.service';

describe('HtmlComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlComponentsService]
    });
  });

  it('should be created', inject([HtmlComponentsService], (service: HtmlComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
