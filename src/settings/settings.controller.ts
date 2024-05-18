import { Controller, Get, Post, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { Country } from 'src/interfaces/country.interface';

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
  updateCountry(@Body('country') newCountry: Country) {
    return { country: this.settingsService.updateCountry(newCountry) };
  }

  @Get('countries')
  getCountries() {
    return this.settingsService.getCountries();
  }

  @Get('currencies')
  getCurrencies() {
    return this.settingsService.getCurrencies();
  }
}
