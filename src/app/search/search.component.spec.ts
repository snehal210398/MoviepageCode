import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { MoviedataService } from '../moviedata.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let movieDataService: MoviedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [{provide: MoviedataService}]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    movieDataService = TestBed.inject(MoviedataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test searchMovie call', () => {
    spyOn(movieDataService, "getMovieData").and.callThrough();
    component.searchMovie("x");
    spyOn(component, "searchMovie").and.callThrough();
    expect(component.movieData).toBeTruthy();
  });
});
