import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from '../entities/Module';
import { AnswerSubmit } from '../entities/AnswerSubmit';
import { Answer } from '../entities/Answer';
import { PossibleAnswer } from '../entities/PossibleAnswer';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private ASurl = 'http://localhost:4000/answersubmits/module/';
  private Aurl = 'http://localhost:4000/answers/answersubmit/';
  private PAurl = 'http://localhost:4000/possibleanswers/';

  constructor(private httpClient: HttpClient) { }
  
  getAnswerSubmits(id: number){
    return this.httpClient.get<AnswerSubmit[]>(this.ASurl+id);
  }

  getAnswers(id: number){
    return this.httpClient.get<Answer[]>(this.Aurl+id);
  }

  getPossibleAnswers(id: number){
    return this.httpClient.get<PossibleAnswer>(this.PAurl+id);
  }
}
