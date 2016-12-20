import Skill from "../models/skill.model";
import { Component } from '@angular/core';
import { SkillService } from '../services/skill.service';

import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs'; 

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';


@Component({
	//moduleId: module.id,
	selector: 'skills',
	styleUrls: ['./skills.component.scss'],
	templateUrl: './skills.component.html',
    providers:[SkillService]

})

export class SkillsComponent{
 
    public skills:Observable<Skill[]>;
    constructor(private skillService: SkillService){}

    private searchTerms = new Subject<string>();
    private search$ = this.searchTerms.asObservable();

    private testTerms = new Subject<string>();
    private test$ = this.testTerms.asObservable();


     ngOnInit() {
         //this.searchFor();

         this.skills = this.search$
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(term => {
                console.log('search for ', term);
                return this.skillService.getSkills(term)
            });

           // setTimeout(() => {
               // this.searchFor('');
            //}, 50)
        
            this.test$.map(term => {
                console.log('testing map', term);
                return term;
            }).subscribe(term => {
                console.log('testing subscribe after map', term);
            }
            );
            this.test$.subscribe(term => {
                console.log('testing subscribe', term);
            });

            this.testTerms.next('test 1');
            this.testTerms.next('test 2');
     }

     ngAfterViewInit(){
          this.searchFor('');
     }

     public searchFor(query?: string){
         this.searchTerms.next(query);
         this.testTerms.next(query);
     }
}