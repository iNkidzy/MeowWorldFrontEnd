import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Cat} from '../Shared/cat.model';
import {catchError} from 'rxjs/operators';
import {CatService} from '../Shared/cat.service';

@Component({
  selector: 'app-cat-create',
  templateUrl: './cat-create.component.html',
  styleUrls: ['./cat-create.component.scss']
})
export class CatCreateComponent implements OnInit {
  name = new FormControl('');
  price = new FormControl('');
  creating = false;
  // catJustCreated: Cat;
  errString = '';

  constructor(private catService: CatService) {
  }

  ngOnInit(): void {
  }
  save() {
    this.creating = true;
    let nameValue = this.name.value;
    let priceValue = this.price.value;
    let cat: Cat = {
      name: nameValue,
      price: priceValue
    };
    this.catService.createCat(cat)
      .pipe(
        catchError(err => {
          this.creating = false;
          this.errString = err.error;
          return err;
        })
      )
      .subscribe(cats => {
        this.name.reset();
        this.price.reset();
        this.creating = false;
        this.errString = '';
        // this.catJustCreated = cat;
      });
  }
}
