import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('currency')
  getCurrency() {
    return { currency: this.settingsService.getCurrency() };
  }

  @Post('currency')
  updateCurrency(@Body('currency') newCurrency: string) {
    return { currency: this.settingsService.updateCurrency(newCurrency) };
  }

  @Get('country')
  getCountry() {
    return { country: this.settingsService.getCountry() };
  }

  @Post('country')
  updateCountry(@Body('country') newCountry: string) {
    return { country: this.settingsService.updateCountry(newCountry) };
  }
}
