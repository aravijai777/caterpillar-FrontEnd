import { Component, OnInit, Optional } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
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
interface Questions {
    order : number,
    type : string,
    title : string,
    options: string[],
   optional : boolean
}
interface car{
    label: string,
    value : string
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
    dropval: any;
    cities: City[];
    selectedCity: City;
  activeIndex: number = 0;
  items: MenuItem[];
  columns: Questions[]=[];
    val1: string;
    val : number;
    Radio: boolean = false;
    div2: boolean = false;
    smiley: boolean = false;
    NPS: boolean = true;
    stars: boolean = false;
    agree: boolean =  false;
    multiple: boolean = false;
    Slider: boolean = false;
    yes: boolean = false;
    cars: car[];
    selectedCar1 : car;
  constructor(private messageService: MessageService)  {
    this.cars = [
        {label: 'Audi', value: 'Audi'},
        {label: 'BMW', value: 'BMW'},
        {label: 'Fiat', value: 'Fiat'},
        {label: 'Ford', value: 'Ford'},
        {label: 'Honda', value: 'Honda'},
        {label: 'Jaguar', value: 'Jaguar'},
        {label: 'Mercedes', value: 'Mercedes'},
        {label: 'Renault', value: 'Renault'},
        {label: 'VW', value: 'VW'},
        {label: 'Volvo', value: 'Volvo'}
    ];

    this.cities = [
        {name: 'Radio' , code: 'Cb'},
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
      //btn float
      $(window).scroll(function() {
        // var winScrollTop = $(window).scrollTop();
        var winHeight = $(window).height();
        var floaterHeight = $('#floater').outerHeight(true);
        var fromBottom = 20;
        // var top = winScrollTop + winHeight - floaterHeight - fromBottom;
      $('#floater').css({'top': top + 'px'});
    });
    $(window).scroll(function() {
        // var winScrollTop = $(window).scrollTop();
        var winHeight = $(window).height();
        var floaterHeight = $('#float').outerHeight(true);
        var fromBottom = 20;
        // var top = winScrollTop + winHeight - floaterHeight - fromBottom;
      $('#float').css({'top': top + 'px'});
    });
      this.addColumn();
      //slider smiley
      $(document).ready(function() {
  
        $('input[type="range"]').on("change mousemove", function() {
          $(this).next().html($(this).val());
        })
           
       });

      //3 smileys
    $('#smileys input').on('click', function() {
        $('#result').html($(this).val());
    });
//nps button
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
 dropdownChange(dropval) {
    //console.log(this.dropval.type.name);
    this.jqueryfun();  
    };
next(val){
    this.activeIndex = 1;
     this.addColumn();
     console.log('check');
}
surveysave(){

}
addColumn() {
    this.columns.push({order:this.columns.length,type:this.cities[0].name,title:'',options:[],optional:true});
}
removeColumn() {
    this.columns.splice(-1, 1);
}
jqueryfun(){
    //NPS
    $('button').hover(function(){
      
        var $this = $(this);
        var $prevAll = $(this).prevAll();
        
        var className = $this.attr("class") + "-hover";
        
        $this.addClass(className);
        $prevAll.addClass(className);
        console.log('hi');
     }, function() {
        var $this = $(this);
        var $prevAll = $(this).prevAll();
        
        $this.removeClass("detractor-hover passive-hover promoter-hover");
        $prevAll.removeClass("detractor-hover passive-hover promoter-hover");
     });

     //SLIDER SMILEY
     $(document).ready(function() {
  
        $('input[type="range"]').on("change mousemove", function() {
          $(this).next().html($(this).val());
        })
           
       });
}
// closebtn(){
//     $(document).ready(function(c) {
//         $('.alert-close').on('click', function(c){
//             $('.message').fadeOut('slow', function(c){
//                   $('.message').remove();
//             });
//         });	
//     });
// }
}
