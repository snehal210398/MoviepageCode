import { Component } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movie!:any;
  constructor(private movieDataService: MoviedataService){}

  ngOnInit(){
    this.movieDataService.movie.subscribe((data)=>{
      console.log(data)
      this.movie = data;
    })
  }
}
