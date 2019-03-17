import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiChatRoomsComponent } from './ai-chat-rooms.component';

describe('AiChatRoomsComponent', () => {
  let component: AiChatRoomsComponent;
  let fixture: ComponentFixture<AiChatRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiChatRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiChatRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
