import {
  Controller,
  Post,
  HttpStatus,
  HttpException,
  Body,
} from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CreateCheckoutSessionDto } from './dto/create-checkout-session.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post('session-token')
  async getSessionToken(
    @Body() createCheckoutSessionDto: CreateCheckoutSessionDto,
  ) {
    try {
      const sessionData = await this.checkoutService.createCheckoutSession(
        createCheckoutSessionDto,
      );
      if (!sessionData.sessionToken) {
        throw new HttpException(
          'Failed to retrieve session token',
          HttpStatus.BAD_REQUEST,
        );
      }
      return { sessionToken: sessionData.sessionToken };
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
