import { Injectable } from '@nestjs/common';

@Injectable()
export class CheckoutService {
  checkout(key: string) {
    if (key) console.log('Key is here.');
  }
}
