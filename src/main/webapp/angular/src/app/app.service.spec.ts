import { TestBed, inject,async } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});

describe('AppServiceTests',()=>{
  let service: AppService;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({
      providers:[AppService]
    })
  }))

  it('should return list of users',async(
    inject([AppService],(service:AppService)=>{
      service.fetchListOfUsers(1).subscribe((response:Response)=>{
        expect(response.json()).toEqual(1);
      })
    })));
    
  it('should return list of users',(done)=>{
    service.get().then((response)=>{
      expect(response.length).toBe(1);
    })
    done();
})
})