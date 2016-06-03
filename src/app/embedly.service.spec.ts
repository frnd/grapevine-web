import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { EmbedlyService } from './embedly.service';

describe('Embedly Service', () => {
  beforeEachProviders(() => [EmbedlyService]);

  it('should ...',
      inject([EmbedlyService], (service: EmbedlyService) => {
    expect(service).toBeTruthy();
  }));
});
