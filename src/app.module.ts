import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutService } from './checkout/checkout.service';
import { CheckoutController } from './checkout/checkout.controller';
import { CheckoutModule } from './checkout/checkout.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    CheckoutModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController, CheckoutController],
  providers: [AppService, CheckoutService],
})
export class AppModule {}
