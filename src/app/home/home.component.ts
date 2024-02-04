import { Component, } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

export interface movieData{
  "year": number,
  "title": string,
  "info"?: {
    "directors": [],
    "release_date": string,
    "rating": number,
    "genres": [],
    "image_url": string,
    "plot": string,
    "rank": number,
    "running_time_secs": number,
    "actors": []
  }
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movieData!:movieData[];
   isMovie!: boolean;
  constructor(private movieDataService: MoviedataService){}

  ngOnInit(){
    this.movieData = this.movieDataService.getMovieData();
    this.movieData = this.movieData.sort((movie1, movie2)=>{
      return movie2.year - movie1.year;
    })
    .slice(0, 4);

    this.movieDataService.setMovieData(this.movieData);
    this.movieDataService.moviesData$.subscribe((data)=>{
      this.movieData = data;
    })
  }

  showMovie(data:any){
    console.log(data)
    this.movieDataService.setMovie(data);
  }

  isMovieAvailable(data: boolean){
    this.isMovie = true;
  }
}
