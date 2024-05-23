import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as dotenv from 'dotenv';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';

dotenv.config();

@Injectable()
export class CheckoutService {
  constructor(private httpService: HttpService) {}

  //todo: refactor
  /* async createCheckoutSession(
    createCheckoutSessionDto: CreateCheckoutSessionDto,
  ): Promise<any> {
    const url = `${process.env.UNIPAAS_SANDBOX_URL}/pay-ins/checkout`;
    const headers = {
      Authorization: `Bearer ${process.env.UNIPAAS_SANDBOX_PRIVATE_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, createCheckoutSessionDto, { headers }),
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error when calling Unipaas:');
      throw new HttpException(
        'Failed to create checkout session',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } */

  async createCheckoutSession(
    createCheckoutSessionDto: CreateCheckoutSessionDto,
  ): Promise<any> {
    const url = `${process.env.UNIPAAS_SANDBOX_URL}/pay-ins/checkout`;
    const headers = {
      Authorization: `Bearer ${process.env.UNIPAAS_SANDBOX_PRIVATE_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return this.performHttpRequest(url, createCheckoutSessionDto, headers);
  }

  private async performHttpRequest(
    url: string,
    data: any,
    headers: any,
  ): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.post(url, data, { headers }),
      );
      return response.data;
    } catch (error) {
      console.error('Error when calling Unipaas:', error);
      throw new HttpException(
        'Failed to create checkout session',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getOrderInfo(orderId: string): Promise<any> {
    const url = `${process.env.UNIPAAS_SANDBOX_URL}/pay-ins/${orderId}`;
    const headers = {
      accept: 'application/json',
      authorization: `Bearer ${process.env.UNIPAAS_SANDBOX_PRIVATE_API_KEY}`,
    };

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { headers }),
      );
      return response.data;
    } catch (error) {
      console.error('Error when calling Unipaas:', error);
      throw new HttpException(
        'Failed to retrieve payment info',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
