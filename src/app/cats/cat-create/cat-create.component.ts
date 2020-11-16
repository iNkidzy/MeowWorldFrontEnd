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
  type = new FormControl('');
  color = new FormControl('');
 //  ownerId = new FormControl('');
  createdDate = new FormControl('');
 // isCompleted = new FormControl('');
  creating = false;
  // catJustCreated: Cat;
  errString = '';

  constructor(private catService: CatService) {
  }

  ngOnInit(): void {
  }
  save = () => {
    this.creating = true;
    const nameValue = this.name.value;
    const typeValue = this.type.value;
    const colorValue = this.color.value;
    const priceValue = this.price.value;
   // const isCompletedValue = this.isCompleted.value;
   //  const ownerIdValue = this.ownerId.value;
    const createdDateValue = this.createdDate.value;
    const cat: Cat = {
      name: nameValue,
      price: priceValue,
      color: colorValue,
      type: typeValue,
      // ownerId: ownerIdValue,
      createdDate: createdDateValue,
    //  isComplete: isCompletedValue
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
        this.createdDate.reset();
        this.color.reset();
        this.type.reset();
        this.creating = false;
        this.errString = '';
        // this.catJustCreated = cat;
      });
  }
}
