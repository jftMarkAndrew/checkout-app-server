import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutService } from './checkout/checkout.service';
import { CheckoutController } from './checkout/checkout.controller';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [CheckoutModule],
  controllers: [AppController, CheckoutController],
  providers: [AppService, CheckoutService],
})
export class AppModule {}
