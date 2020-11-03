import { Component, OnInit } from '@angular/core';
import { FilterService } from '../service/filter.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private filterService: FilterService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.getSpaceXList().subscribe(
      (res)=>{
        if(res){
          this.filterService.setList(res);
        }
      }
    )
  }

  filterdResult() {
    return this.filterService.getList();
  }

}
