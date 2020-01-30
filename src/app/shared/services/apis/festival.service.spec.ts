import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { FestivalService } from "./festival.service";



describe('Festival Service Tests', () => {

  let festivalService: FestivalService;
  let httpTestingController: HttpTestingController;

  let testFestivalResults = [
    {
      name: "LOL-palooza",
      bands: [
        {
          name: "Werewolf Weekday",
          recordLabel: "XS Recordings"
        },
        {
          name: "Jill Black",
          recordLabel: "Fourth Woman Records"
        },
        {
          name: "Frank Jupiter",
          recordLabel: "Pacific Records"
        },
        {
          name: "Winter Primates",
          recordLabel: ""
        }
      ]
    },
    {
      name: "Small Night In",
      bands: [
        {
          name: "The Black Dashes",
          recordLabel: "Fourth Woman Records"
        },
        {
          name: "Yanke East",
          recordLabel: "MEDIOCRE Music"
        },
        {
          name: "Green Mild Cold Capsicum",
          recordLabel: "Marner Sis. Recording"
        },
        {
          name: "Squint-281",
          recordLabel: "Outerscope"
        },
        {
          name: "Wild Antelope",
          recordLabel: "Marner Sis. Recording"
        }
      ]
    }

  ];


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FestivalService]
    });

    festivalService = TestBed.get(FestivalService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should GET all Festival Results', () => {
    festivalService.getFestivalResults()
      .subscribe((festivals: any) => {
        expect(festivals).toBeTruthy();
        expect(festivals.length).toBe(7);
        const festival = festivals.find(festival => festival.recordLabel == 'Fourth Woman Records');
        expect(festival.bands[0].festivalName).toBe("LOL-palooza");
      });

    const reqFestivalRequest: TestRequest = httpTestingController.expectOne('http://localhost:3000/api/v1/festivals');
    expect(reqFestivalRequest.request.method).toEqual('GET');
    reqFestivalRequest.flush(testFestivalResults);
  });


});