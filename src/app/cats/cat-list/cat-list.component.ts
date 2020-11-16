import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Cat} from '../Shared/cat.model';
import {CatService} from '../Shared/cat.service';
import {catchError, switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {
  Cats: Cat[];
  errormessage: '';

  constructor(private catService: CatService) {
  }

  ngOnInit(): void {
    this.catService.getCats()
      .subscribe(
        cats => {
          this.Cats = cats;
        },
        error => {
          this.errormessage = error.message;
        });
  }
}
 // delete(id: any): any {
  //  this.catService.delete(id)
  //    .pipe(
  //      switchMap(c => this.cats$ = this.catService.getCats()),
 //       catchError(err => {
//          return err;
 //       })
 //     ).subscribe();
//  }


