import { Component, OnInit , Optional } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddSurveyService } from 'app/services/addSurvey/add-survey.service';
import { Http, Headers } from '@angular/http';
import { MessageService, SelectItem, ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/primeng';
import {ToastModule} from 'primeng/toast';
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
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.scss'],
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
export class EditSurveyComponent implements OnInit {
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
  constructor(private route: ActivatedRoute,public router: Router,private addSurveyService:AddSurveyService,private messageService: MessageService,private confirmationService: ConfirmationService) { 
    this.cars = [
      { label: 'Default', value: 'dark' }
  ];

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
          this.activeIndex = 1;
          if(this.columns.length == 0){
          this.addColumn();
          }
        //   for(var j = 0; j < this.attributes.length; j++){
        //       console.log(this.attributes[j].survey );
        //           console.log(this.sur_id._id);
            //   if(this.attributes[j].survey == this.sur_id._id ){
            //       console.log(this.attributes[j].survey );
            //       this.editSurvey = this.attributes[j];
            //       console.log(this.editSurvey);
            //   this.activeIndex = 1;
            //   }
         //   }

        }); 
    });
  $('.like-button').on('click', function() {
      $(this).toggleClass('liked')
    })
  //btn float
  $(window).scroll(function () {
      // var winScrollTop = $(window).scrollTop();
      var winHeight = $(window).height();
      var floaterHeight = $('#floater').outerHeight(true);
      var fromBottom = 20;
      // var top = winScrollTop + winHeight - floaterHeight - fromBottom;
      $('#floater').css({ 'top': top + 'px' });
  });
  $(window).scroll(function () {
      // var winScrollTop = $(window).scrollTop();
      var winHeight = $(window).height();
      var floaterHeight = $('#float').outerHeight(true);
      var fromBottom = 20;
      // var top = winScrollTop + winHeight - floaterHeight - fromBottom;
      $('#float').css({ 'top': top + 'px' });
  });
  //slider smiley
  $(document).ready(function () {

      $('input[type="range"]').on("change mousemove", function () {
          $(this).next().html($(this).val());
      })

  });

  //3 smileys
  $('#smileys input').on('click', function () {
      $('#result').html($(this).val());
  });
  //nps button
  $('button').hover(function () {
      var $this = $(this);
      var $prevAll = $(this).prevAll();

      var className = $this.attr("class") + "-hover";

      $this.addClass(className);
      $prevAll.addClass(className);
  }, function () {
      var $this = $(this);
      var $prevAll = $(this).prevAll();

      $this.removeClass("detractor-hover passive-hover promoter-hover");
      $prevAll.removeClass("detractor-hover passive-hover promoter-hover");
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
    // this.addSurveyService.dashboard().subscribe(res => {
    //   this.attributes = res;
    //   console.log(this.attributes);
    // });

}
dropdownChange(dropval) {
  //console.log(this.dropval.type.name);
  this.jqueryfun();
};
// next(val) {
//   console.log(val);
//   let feed = {
//       "surveyName": val.surveyName,
//       "description": val.description,
//       "theme": val.theme
//   }
//   var headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//  this.addSurveyService.createSurvey(feed).subscribe((res:any) => {
//          console.log(res);
//          // this.getSurvey();
//          this.surveyId=res._id;
//           this.activeIndex = 1;
//           this.addColumn();
//  })
// }
surveysave() {
  let questions= JSON.parse(JSON.stringify(this.columns));
  console.log(questions);
  questions.forEach((el)=>{
    console.log(el);
      el.type=el.type;
      console.log(el.type);
  })
  console.log(questions);
  let postParams={
      survey: this.sur_id,
      question:questions,
      is_completed:false
  }
  console.log(postParams);
  this.addSurveyService.addQuestions(postParams).subscribe(
      res=> {this.saveAlert$ = "Success"},
      err => console.log("error"),
      () => {
        setTimeout(() => {
          if (this.saveAlert$ == "Success") {
              console.log('enter save');
            this.messageService.add({ severity: 'Success', summary: 'Success', detail: 'questions updated successfully' });
          }
        },1000);
      this.messageService.add({
        key: 'c', sticky: true, severity:'info',
        summary: ' Are you want to Split Questions ?'});
});
}
onConfirm()  {
    this.messageService.clear('c');
    this.messageService.add({key:'custom',severity:'success', summary:'Confirmed', detail:'You have accepted splitting'});
      this.router.navigate(['/split',this.sur_id]);
}
onReject() {
    this.messageService.clear('c');
    this.messageService.add({key:'custom',severity:'warn', summary:'Rejected', detail:'You have rejected splitting'});
     // this.router.navigate(['/Organizations/OrganizationsDetails',this.QaID]);
}
addColumn() {
  this.columns.push({ order: this.columns.length, type: 'Radio', title: '', options: [], optional: true });
  console.log(this.columns);
}
removeColumn(question:any) {
  console.log(question);
  this.columns=this.columns.filter((el)=>el.order!=question.order);
  this.columns.forEach((el,i)=>{
      el.order=i;
  })
}
// back(){
//   this.activeIndex = 0;
// }
jqueryfun() {
  //NPS
  $('button').hover(function () {

      var $this = $(this);
      var $prevAll = $(this).prevAll();

      var className = $this.attr("class") + "-hover";

      $this.addClass(className);
      $prevAll.addClass(className);
      // console.log('hi');
  }, function () {
      var $this = $(this);
      var $prevAll = $(this).prevAll();

      $this.removeClass("detractor-hover passive-hover promoter-hover");
      $prevAll.removeClass("detractor-hover passive-hover promoter-hover");
  });

  //SLIDER SMILEY
  $(document).ready(function () {

      $('input[type="range"]').on("change mousemove", function () {
          $(this).next().html($(this).val());
      })

  });
  //agree/disagre
}
likeClicked(){
  this.liked=!this.liked;
}
onResize(){
  let innerheight=window.innerHeight;
  let height = innerheight - 250;
  this.pageHeight=height+'px';
}
}