import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { SuccessCardImage } from './success-card-image';
import { SuccessCardsImagesService } from './success-cards-images-service';

// declare var swal: any;
@Component({
  selector: 'app-successcards',
  templateUrl: './success-cards.component.html',
  styleUrls: [ './success-cards.component.css' ],
  providers: [SuccessCardsImagesService]  // create a fresh instance of the SuccessCardsImagesService on creating this component
})

export class SuccessCardsComponent implements OnInit {
  successCardsRef: AngularFireList<any>;
  success_cards: Observable<any>;

  successcards: SuccessCardImage[];

  card_price = 250.00;
  constructor(
    private successCardImgService: SuccessCardsImagesService,
    private router: Router,
    db: AngularFireDatabase
  ) {
    this.successCardsRef = db.list('success-cards');
    this.success_cards = this.successCardsRef.valueChanges();
  }

  getSuccessCardImages(): void {
    this.successCardImgService.getSuccessCardImages().then(successcards => this.successcards = successcards);
  }

  ngOnInit(): void {
    this.getSuccessCardImages();
  }
  gotoSuccessCard(id: number): void {
    this.router.navigate(['/ordersuccesscard', +id])
  }

  order(): void {
    // swal('Order Created!', '...thank you!');
  }
}
