import { Component, OnInit } from '@angular/core';
import {StepsModule} from 'primeng/steps';
import { MenuItem } from '../../../node_modules/primeng/components/common/menuitem';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {NgForm} from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
interface City {
    name: string,
    code: string
}

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css'],
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
  constructor(private messageService: MessageService)  {
    this.cities = [
        {name: 'Radio', code: 'NY'},
        {name: 'Check Box', code: 'RM'},
        {name: 'Text', code: 'LDN'},
        {name: 'Smileys', code: 'IST'},
        {name: 'Stars', code: 'PRS'}
    ];
  }
  ngOnInit() {
    dropdownChange(obj) {
        if('Radio' == obj){
        }
        }
    this.columns = [];
    this.items = [{
      label: 'CREATE',
      command: (event: any) => {
          this.activeIndex = 0;
          this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
      }
  },
  {
      label: 'Seat',
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
check(){
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
