import { TestBed } from '@angular/core/testing';

import { AiChatService } from './ai-chat.service';

describe('AiChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AiChatService = TestBed.get(AiChatService);
    expect(service).toBeTruthy();
  });
});
