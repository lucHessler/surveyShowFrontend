
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/entities/Answer';
import { AnswerSubmit } from 'src/app/entities/AnswerSubmit';
import { Module } from 'src/app/entities/Module';
import { PossibleAnswer } from 'src/app/entities/PossibleAnswer';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.less']
})
export class ModuleComponent implements OnInit {
  id: any
  answerSubmits: AnswerSubmit[] = [];
  answers: Answer[] = [];
  possibleAnswers: PossibleAnswer[] = [];
  constructor(private service:ModuleService, private _router: Router, private activatedRoute: ActivatedRoute) {}
  counts:any = {};

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = Number(id)
    this.service.getAnswerSubmits(this.id)
      .subscribe((response: AnswerSubmit[]) => {
        this.answerSubmits = response;
        this.answerSubmits.forEach(as => {
          this.service.getAnswers(as.id)
            .subscribe((response: Answer[]) => {
              this.answers = this.answers.concat(response);
              response.forEach(a => {
                this.service.getPossibleAnswers(a.possibleanswer_id).subscribe((response: PossibleAnswer ) =>{
                  this.possibleAnswers = this.possibleAnswers.concat(response)
                  console.log("counted")

                  this.possibleAnswers.forEach( (x) => { this.counts[x.answer] = (this.counts[x.answer] || 0) + 1; });
                  console.log(this.counts)
                });
                
              });
              
            });
        });
      });
      
  }
}