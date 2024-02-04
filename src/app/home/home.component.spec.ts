import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SearchComponent } from '../search/search.component';
import { MoviedataService } from '../moviedata.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let movieDataService: MoviedataService;
  let data = {
    "year": 2013,
    "title": "Rush",
    "info": {
      "directors": [
        "Ron Howard"
      ],
      "release_date": "2013-09-02T00:00:00Z",
      "rating": 8.3,
      "genres": [
        "Action",
        "Biography",
        "Drama",
        "Sport"
      ],
      "image_url": "https://ia.media-imdb.com/images/M/MV5BMTQyMDE0MTY0OV5BMl5BanBnXkFtZTcwMjI2OTI0OQ@@._V1_SX400_.jpg",
      "plot": "A re-creation of the merciless 1970s rivalry between Formula One rivals James Hunt and Niki Lauda.",
      "rank": 2,
      "running_time_secs": 7380,
      "actors": [
        "Daniel Bruhl",
        "Chris Hemsworth",
        "Olivia Wilde"
      ]
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchComponent],
      providers: [{provide: MoviedataService}]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    movieDataService = TestBed.inject(MoviedataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnInit call', () => {
    spyOn(movieDataService, "getMovieData").and.callThrough();
    spyOn(movieDataService, "setMovieData").and.callThrough();
    component.ngOnInit();
    spyOn(component, "ngOnInit").and.callThrough();
    expect(component.movieData).toBeTruthy();
  });

  it('should test showMovie call', () => {
    spyOn(component, "showMovie").and.callThrough();
    spyOn(movieDataService, "setMovie").and.callThrough();
    component.showMovie(data);
    expect(component.showMovie).toHaveBeenCalled();
    expect(movieDataService.setMovie).toHaveBeenCalled();
  });
});
