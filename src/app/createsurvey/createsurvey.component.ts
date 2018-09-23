import { Component, OnInit } from '@angular/core';
import {StepsModule} from 'primeng/steps';
import { MenuItem } from '../../../node_modules/primeng/components/common/menuitem';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {NgForm} from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule, Dropdown} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {SliderModule} from 'primeng/slider';
declare var jquery:any;
declare var $ :any;

interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.scss'],
  animations: [
    trigger('animation', [
        state('visible', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({transform: 'translateX(50%)', opacity: 0}),
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
]
})
export class CreatesurveyComponent implements OnInit {
    cities: City[];

    selectedCity: City;
  activeIndex: number = 0;
  items: MenuItem[];
  columns: number[];
    val1: string;
    val : number;
    Radio: boolean = false;
    div2: boolean = false;
    smiley: boolean = false;
    NPS: boolean = false;
    stars: boolean = false;
    agree: boolean =  false;
    multiple: boolean = false;
    Slider: boolean = false;
    yes: boolean = false;
  constructor(private messageService: MessageService)  {
    this.cities = [
        {name:'Radio' , code: 'Cb'},
        {name: 'Star Rating', code: 'NY'},
        {name: 'Smileys', code: 'RM'},
        {name: 'NPS Rating (1-10)', code: 'LDN'},
        {name: 'Agree/Disagree', code: 'AGR'},
        {name: 'Multiple Choice', code: 'IST'},
        {name: 'yes/No', code: 'PRS'},
        {name: 'Text box', code: 'PRS'},
        {name: 'Comment box(Text Area)', code: 'PRS'},
        {name: 'Slider', code: 'sli'}
    ];
  }
  ngOnInit() {
      //animated stars

      //3 smileys
    $('#smileys input').on('click', function() {
        $('#result').html($(this).val());
    });
//nps button
// $('button').hover(function(){
//     var $this = $(this);
//     var $prevAll = $(this).prevAll();
    
//     var className = $this.attr("class") + "-hover";
    
//     $this.addClass(className);
//     $prevAll.addClass(className);
//  }, function() {
//     var $this = $(this);
//     var $prevAll = $(this).prevAll();
    
//     $this.removeClass("detractor-hover passive-hover promoter-hover");
//     $prevAll.removeClass("detractor-hover passive-hover promoter-hover");
//  });
//slider smiley
    this.columns = [];
    this.items = [{
      label: 'CREATE',
      command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
      }
  },
  {
      label: 'Questions',
      command: (event: any) => {
          this.activeIndex = 1;
          this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
      }
  },
  {
      label: 'Payment',
      command: (event: any) => {
          this.activeIndex = 2;
          this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
      }
  },
  {
      label: 'Confirmation',
      command: (event: any) => {
          this.activeIndex = 3;
          this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
      }
  }
];
 }
 dropCheck() {
    this.Radio = false;
    this.smiley  = false;
   this.NPS  = false;
   this.stars  = false;
    this.agree  =  false;
    this.multiple  = false;
    this.Slider  = false;
    this.yes = false;
 }
 dropdownChange(drop) {
    this.dropCheck();
    if('Radio' == this.selectedCity.name){
        this.dropCheck();
        this.Radio = true;
        }
    else if('Smileys' == this.selectedCity.name){
        this.dropCheck();
        this.smiley = true;
    }else if('NPS Rating (1-10)' == this.selectedCity.name){
        this.NPS = true;
        $('button').hover(function(){
            var $this = $(this);
            var $prevAll = $(this).prevAll();
            
            var className = $this.attr("class") + "-hover";
            
            $this.addClass(className);
            $prevAll.addClass(className);
         }, function() {
            var $this = $(this);
            var $prevAll = $(this).prevAll();
            
            $this.removeClass("detractor-hover passive-hover promoter-hover");
            $prevAll.removeClass("detractor-hover passive-hover promoter-hover");
         });     
    }else if('Star Rating' == this.selectedCity.name){
        this.dropCheck();
        this.stars = true;
    }else if('Agree/Disagree' == this.selectedCity.name){
        this.dropCheck();
        this.agree = true;
    }else if('Multiple Choice' == this.selectedCity.name){
        this.dropCheck();
        this.multiple = true;
    }else if('Slider' == this.selectedCity.name){
        this.dropCheck();
        this.Slider = true;
    }
    else if('yes/No' == this.selectedCity.name){
        this.dropCheck();
        this.yes = true;
    }
    console.log(this.selectedCity.name);
    };
next(){
    this.activeIndex = 1;
    // this.columns.push(this.columns.length);
}
addColumn() {
    this.columns.push(this.columns.length);
}
removeColumn() {
    this.columns.splice(-1, 1);
}
}
