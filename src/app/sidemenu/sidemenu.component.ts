import { Component, OnInit } from '@angular/core';
import { FilterService } from '../service/filter.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  public yearList = [];
  public startYear = 2006;
  public endYear = 2020;
  public launch:any;
  public land:any;
  public launch_pass:boolean = false;
  public land_pass:boolean = false;
  public year:any;
  constructor(
    private httpService: HttpService,
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    for(let i = this.startYear;i<=this.endYear;i++){
      this.yearList.push({selected:false,year:i});
    }
  }

  filter(launch, land, yr){
    this.httpService.getSpaceXList(launch, land, yr).subscribe(
      (res)=>{
        if(res){
          this.filterService.setList(res);
        }
      }
    )
  }

  onSelectedYear(year){
    this.year = year;
    this.yearList.forEach(item=>{
      item.selected = item.year === year ? true : false;
    })
    this.filter(this.launch_pass, this.land_pass, this.year);
  }

  onLaunchChange(launchValue){
    this.launch_pass = launchValue;
    this.filter(this.launch_pass, this.land_pass, this.year)
  }
  onLandChange(landValue){
    this.land_pass = landValue;
    this.filter(this.launch_pass, this.land_pass, this.year)
  }
}
