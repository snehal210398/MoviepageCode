import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { MoviedataService } from '../moviedata.service';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;
  let movieDataService: MoviedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieComponent],
      providers: [{provide: MoviedataService}]
    });
    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    movieDataService = TestBed.inject(MoviedataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnInit call', () => {
    component.ngOnInit();
    spyOn(component, "ngOnInit").and.callThrough();
    expect(component.movie).toBeTruthy();
  });
});
