import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class CheckoutService {
  constructor(private httpService: HttpService) {}

  async createCheckoutSession(): Promise<any> {
    const url = 'https://sandbox.unipaas.com/platform/pay-ins/checkout';
    const headers = {
      Authorization: `Bearer ${process.env.UNIPAAS_SANDBOX_PRIVATE_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const body = {
      amount: 1000,
      currency: 'GBP',
      country: 'GB',
      disablePaymentMethods: { disableCard: false, disablePayByBank: false },
      email: 'jftmain@gmail.com',
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, body, { headers }),
      );
      return response.data;
    } catch (error) {
      console.error('Error when calling Unipaas:');
      throw new HttpException(
        'Failed to create checkout session',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
