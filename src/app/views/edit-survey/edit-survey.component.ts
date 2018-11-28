import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddSurveyService } from 'app/services/addSurvey/add-survey.service';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.scss']
})
export class EditSurveyComponent implements OnInit {
  sur_id: any = {};
  attributes: any = {};

  constructor(private route: ActivatedRoute,public router: Router,private addSurveyService:AddSurveyService) { }

  ngOnInit() {
    // this.sur_id = this.route.snapshot.queryParamMap.get('Qa_Setup_ID');
    // console.log(this.sur_id);
    this.route.params.subscribe( params =>{ 
      this.sur_id = params;
      console.log(this.sur_id);
    });
    this.addSurveyService.dashboard().subscribe(res => {
      this.attributes = res;
      console.log(this.attributes);
    });
  }

}
