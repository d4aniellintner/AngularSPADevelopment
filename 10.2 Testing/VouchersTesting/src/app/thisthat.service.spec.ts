import { TestBed } from '@angular/core/testing';

import { ThisthatService } from './thisthat.service';

describe('ThisthatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThisthatService = TestBed.get(ThisthatService);
    expect(service).toBeTruthy();
  });
});
