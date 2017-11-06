import { Injectable } from '@angular/core';

import { SuccessCardImage } from './success-card-image';
import { SUCCESSCARDIMAGES } from './mock-success-cards-images';

@Injectable()
export class SuccessCardsImagesService {
  getSuccessCardImages(): Promise<SuccessCardImage[]> {
    return Promise.resolve(SUCCESSCARDIMAGES);
  }

  getSuccessCardImage(id: number): Promise<SuccessCardImage> {
    return this.getSuccessCardImages()
      .then(successcards => successcards.find(successcard => successcard.id === id));
  }
}
