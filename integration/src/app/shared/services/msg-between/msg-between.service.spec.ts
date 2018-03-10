import { TestBed, inject, fakeAsync } from '@angular/core/testing';

import { MsgBetweenService } from './msg-between.service';

describe('MsgBetweenService', () => {
  let fixture: MsgBetweenService;
  beforeAll(() => {
    fixture = new MsgBetweenService();
  });


  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [MsgBetweenService]
  //   });
  // });

  it('should be created', inject([MsgBetweenService], (service: MsgBetweenService) => {
    expect(service).toBeTruthy();
  }));


  describe('exportData', () => {
    it('should set the Subject of exportService', fakeAsync(
      () => {
        fixture.raiseMessage({ 'test': 'testString' });
        fixture.getMessage().subscribe(
          (exportData: { [key: string]: any | Array<any> }) => {
            expect(exportData).toEqual({ 'test': 'testString' });
          }
        );
      }
    ));
  });
});
