import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddSurveyService } from 'app/services/addSurvey/add-survey.service';
import { MessageService, ConfirmationService ,SelectItem} from 'primeng/api';
import { Message } from 'primeng/primeng';
import { trigger, state, style, transition, animate } from '@angular/animations';
declare var jquery: any;
declare var $: any;


interface Questions {
    order: number,
    type: any,
    title: string,
    options: string[],
    optional: boolean,
    _id?: string,
    survey?: string,
    question_no?:number

}
interface car {
    label: string,
    value: string
}

@Component({
  selector: 'app-split',
  templateUrl: './split.component.html',
  styleUrls: ['./split.component.scss'],
  animations: [
    trigger('animation', [
        state('visible', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({ transform: 'translateX(50%)', opacity: 0 }),
            animate('300ms ease-out')
        ]),
        transition('* => void', [
            animate(('250ms ease-in'), style({
                height: 0,
                opacity: 0,
                transform: 'translateX(50%)'
            }))
        ])
    ])
],
  host:{
    '(window.resize)':'onResize($event)'
}
})
export class SplitComponent implements OnInit {
    show:boolean = false;
  Survey: any;
  SurveyName: string;
editSurvey: any;
masters: any;
feed: object = {};
dropval: any;
cities: SelectItem[];
selectedCity: SelectItem;
activeIndex: number = 0;
items: any[];
columns: Questions[] = [];
//columns: Questions[];
val1: string;
val: number;
Radio: boolean = false;
div2: boolean = false;
smiley: boolean = false;
NPS: boolean = true;
stars: boolean = false;
agree: boolean = false;
multiple: boolean = false;
Slider: boolean = false;
yes: boolean = false;
cars: car[];
selectedCar1: car;
surveyId: any;
liked: boolean;
pageHeight: string;
sur_id: any = {};
attributes: any = {};
temp:any;
saveAlert$: string;
msgs: Message[];
splitColumns: Questions[] = [];
targetColumns:any = [];
  constructor(private route: ActivatedRoute,public router: Router,private addSurveyService:AddSurveyService,private messageService: MessageService,private confirmationService: ConfirmationService) {
    this.cities = [
      { label: 'Radio', value: 'Radio' },
      { label: 'Star Rating', value: 'Star Rating' },
      { label: 'Smileys', value: 'Smileys' },
      { label: 'NPS Rating (1-10)', value: 'NPS Rating (1-10)' },
      { label: 'Agree/Disagree', value: 'Agree/Disagree' },
      { label: 'Multiple Choice', value: 'Multiple Choice' },
      { label: 'yes/No', value: 'yes/No' },
      { label: 'Text box', value: 'Text box' },
      { label: 'Comment box(Text Area)', value: 'Comment box(Text Area)' },
      { label: 'Slider', value: 'Slider' }
  ];
   }

  ngOnInit() {
    this.route.params.subscribe( params =>{ 
      this.sur_id = params._id;
      console.log(this.sur_id);
      this.addSurveyService.editSurvey(this.sur_id).subscribe((res : any) => {  
          console.log(res);
          this.columns = res.questions;
          console.log(this.columns);
         this.Survey = res.survey;
          console.log(this.Survey);
          this.activeIndex = 2;
        }); 
    });

    this.columns = [];
  this.items = [{
      label: 'CREATE',
      command: (event: any) => {
         this.activeIndex = 0;
          this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label });
      }
  },
  {
      label: 'Questions',
      command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
      }
  },
  {
      label: 'Split Questions',
      command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
      }
  },
  {
      label: 'Final Survey',
      command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label });
      }
  }
  ];
  this.onResize();
  }
  onResize(){
    let innerheight=window.innerHeight;
    let height = innerheight - 250;
    this.pageHeight=height+'px';
  }
  split(ord){
      console.log(ord);
      console.log('hi');
      var splitColumn = this.columns;
      this.columns = [];
      for(var i=0;i< splitColumn.length; i++){
   if(splitColumn[i].order <= ord){
       
       this.columns.push(splitColumn[i]);
   }
   else{
        this.show = true;
        this.splitColumns.push(splitColumn[i]);
   }
      }
      console.log(this.columns);
      console.log(this.splitColumns);
  }
}
