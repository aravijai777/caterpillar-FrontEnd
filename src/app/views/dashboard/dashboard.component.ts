import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { AddSurveyService } from 'app/services/addSurvey/add-survey.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cols: any[];
  totalRecords: number;
  rows: any;
  filters: any;
  pFirst:any;
  pRow:any;
  pSortField:any;
  first: any;
  loading: boolean;
  pageRows: any;
  sortField: string;

  pSortOrder: any;
  attributes: Object = {};
  constructor(private addSurveyService:AddSurveyService) { }

  ngOnInit() {
this.addSurveyService.dashboard().subscribe(res => {
  this.attributes = res;
  console.log(this.attributes);
});
    this.cols = [
      { field: 'Column11', header: 'Action' },
      { field: 'surveyName', header: 'surveyName' },
      { field: 'theme', header: 'theme' },
      { field: 'url', header: 'url' },
      { field: 'description', header: 'description'}
      // { field: 'Column3', header: 'Reference Code' },
      // { field: 'Column4', header: 'Description' },
      // { field: 'Column5', header: 'Effective From Date' },
      // { field: 'Column6', header: 'Effective To Date' },
    ];
  }
  /* 
  Server Side Pagination,Filtering,Sorting Function
  */
 LazyLoadEvent(event: LazyLoadEvent) {
  console.log(event);
  this.loading = true;

  if (event.sortField != undefined) {
    this.sortField = event.sortField;
  }
  else {
    this.sortField = "Column11";
  }
  if (event.sortOrder != -1) {
    event.sortOrder = 1;
  }
  console.log("rows:" + event.rows);
  console.log("offset:" + event.first);
  console.log("sort:" + event.sortField);
  console.log("order:" + event.sortOrder);
  this.rows = event.rows;
  this.first = event.first;
  this.filters = "1=1";
      if (event.filters != undefined && event.filters != null) {
        for (let [key, value] of Object.entries(event.filters)) {
        if (value.matchMode == "equals") {
        this.filters = this.filters == "" ? " CAST(a." + key + " as Text) ILIKE '%" + value.value + "%'" : this.filters + " AND " + " CAST(a." + key + " as Text) ILIKE '%" + value.value + "%'";
        }
        else {
        this.filters = this.filters == "" ? "a." + key + " ILIKE '%" + value.value + "%'" : this.filters + " AND " + "a." + key + " ILIKE '%" + value.value + "%'";
        }
        }
        }
  console.log(this.filters);
  //this.attributeService.getData(event.first, event.rows, this.sortField, event.sortOrder, this.filters).then(attributes => {
  //  this.attributes = attributes;
  // }).then(() => {
  //   this.attributeService.getDataCount(this.filters).then(count => this.totalRecords = count);
  //   console.log("When filter applied " + this.totalRecords);
  //   this.loading = false;

  // });
}
showDialogToEdit(){
  
}
}
