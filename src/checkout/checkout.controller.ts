import { Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { Response } from 'express';

@Controller('checkout')
export class CheckoutController {
  constructor(private checkoutService: CheckoutService) {}

  @Post('session-token')
  async getSessionToken(@Res() res: Response) {
    try {
      const sessionData = await this.checkoutService.createCheckoutSession();
      if (!sessionData.sessionToken) {
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ message: 'Failed to retrieve session token' });
      }
      return res.json({ sessionToken: sessionData.sessionToken });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
    }
  }
}
