import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-filter-section',
  templateUrl: './customer-filter-section.component.html',
  styleUrls: ['./customer-filter-section.component.css']
})
export class CustomerFilterSectionComponent implements OnInit {

  openFilter = false;

  constructor() { }

  public showFilters(){
    if(this.openFilter == false){
      this.openFilter = true;
    }
    else if(this.openFilter == true){
      this.openFilter = false;
    }
  }

  ngOnInit(): void {
  }

}
