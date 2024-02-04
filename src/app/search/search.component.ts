import { Component, EventEmitter, Output } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Output() isMovie: EventEmitter<boolean> = new EventEmitter()
  movieData!:any;
  constructor(private movieDataService: MoviedataService){}

  ngOnInit(){
  }

  searchMovie(key: any){
    this.movieData = this.movieDataService.getMovieData();
    if(this.movieData){
      this.movieData = this.movieData.filter((item:any)=>{
        if(item["title"].includes(key.value)){
          return true;
        }else{
          return false;
        }
      })
    }
    if(this.movieData.length === 0){
      this.isMovie.emit(true);
    }
    this.movieDataService.setMovieData(this.movieData);
  }


}


