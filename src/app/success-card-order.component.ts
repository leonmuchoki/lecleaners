import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'; // to use with route parameters Observable

import { SuccessCardsImagesService } from './success-cards-images-service';
import { SuccessCardImage } from './success-card-image';


@Component({
  selector: 'app-success-card-order',
  templateUrl: './success-card-order.component.html',
  styleUrls: ['./success-card-order.component.css'],
  providers: [SuccessCardsImagesService]
})

export class SuccessCardOrderComponent implements OnInit {
  title = 'order success card';
  successcard: SuccessCardImage;

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
    private successCardImgService: SuccessCardsImagesService,
    private route: ActivatedRoute,
    private location: Location,
    db: AngularFireDatabase
  ) {
    this.itemsRef = db.list('success-card-orders');
    this.items = this.itemsRef.valueChanges();
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.successCardImgService.getSuccessCardImage(+params.get('id')))
      .subscribe(successcard => this.successcard = successcard);
  }

  addSuccessCard(card_url: string, candidatename: string, candidateaddress: string, sendername: string,
                 sendermobileno: string, successmessage: string) {
    console.log('card_url:' + card_url + ' | candidatename: ' + candidatename );
    this.itemsRef.push({
      card_url: card_url,
      candidate_name: candidatename,
      candidate_address: candidateaddress,
      sender_name: sendername,
      sender_mobile: sendermobileno,
      success_message: successmessage
    });
  }
}
