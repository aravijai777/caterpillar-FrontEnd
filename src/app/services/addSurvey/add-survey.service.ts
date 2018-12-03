import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AddSurveyService {

  private _addQuestionsURL:string='http://localhost:4040/api/questions/addQuestions';
  private _createSurveyURL:string = 'http://localhost:4040/api/survey';  
  private _getQuestion:string = 'http://localhost:4040/api/questions/findQuestion/sampleSurveydar';
  //http://localhost:4040/api/survey
  // https://directed-will-207311.appspot.com/api/survey
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
   dashboard(){
    return this.http.get(this._createSurveyURL);
   }
   editSurvey()
   {
    return this.http.get(this._getQuestion); 
   }

}
