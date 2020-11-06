import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cat} from '../Shared/cat.model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {CatService} from '../Shared/cat.service';
import {catchError, take} from 'rxjs/operators';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss']
})
export class CatDetailComponent implements OnInit, OnDestroy {
id: number;
cat$: Observable<Cat>;
err: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private catService: CatService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(take(1))
      .subscribe(
        params => {
          this.id = +params.get('id');
          this.cat$ = this.catService.getCatById(this.id);
        }
      );
  }
  delete() {
    this.catService.delete(this.id)
      .pipe(
        catchError(err => {
          this.err = err;
          return err;
        })
      )
      .subscribe();
    // (() => {
    // this.router.navigateByUrl('cats');
    //  })
  }
}
