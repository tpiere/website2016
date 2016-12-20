import Skill from "../models/skill.model";
import SKILLS from "./skills.list";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
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


@Injectable()
export class SkillService {

    constructor(private jsonp: Jsonp){}

    //private callbackCount = 'a';
    //private skillsSource = new Subject<Skill[]>();
    
    private searchSource = new Subject<string>();
    // Observable string streams
    //private skills$ = this.skillsSource.asObservable();
    //private search$ = this.searchSource.asObservable();

    getSkills(query?: string) : Observable<Skill[]> {
       
    //     setTimeout(() => {
    //         this.skillsSource.next(SKILLS);
    //     }, 100);
    //    return this.skills$;

   
         //  let url : string = 'http://localhost:3000/skills?callback=JSONP_CALLBACKb&&format=jsonP&prefix=JSONP_CALLBACKb';

       // this.callbackCount++;
//        let observable = this.searchSource
// //            .debounceTime(200)
//   //          .distinctUntilChanged()
//             .switchMap((term) => {
//                let url : string = `http://localhost:3000/skills?callback=JSONP_CALLBACK&query=${term}`;
//                return this.jsonp.get(url, {})
//             }).map((r: Response) => {
//                 console.log("response: ", r);
//                 return r.json() as Skill[];
//             });
        
//         setTimeout(() => { query = query || '';
//             this.searchSource.next(query);
//         }, 100);
       
       // return observable;
        let term = query || '';
        term = encodeURIComponent(term);        
        let url : string = `http://localhost:3000/skills?callback=JSONP_CALLBACK&query=${term}`;
           
        return this.jsonp.get(url, {})
            .map((r: Response) => {
                console.log("response: ", r);
               return r.json() as Skill[];
            });
    }

};