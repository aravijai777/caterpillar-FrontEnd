import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddSurveyService {

  private _addQuestionsURL:string='https://directed-will-207311.appspot.com/api/questions/addQuestions';
  private _createSurveyURL:string = 'https://directed-will-207311.appspot.com/api/survey';

  constructor(private http:HttpClient) { }

  addQuestions(postParam:any){
    return this.http.post(this._addQuestionsURL,postParam);
  }
  // getSurveyId(){
  //   return this.http.get("https://directed-will-207311.appspot.com/api/survey");
  // }

  createSurvey(postParam:any){
    return this.http.post(this._createSurveyURL,postParam);
  }


}
