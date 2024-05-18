import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  private currency: string = 'GBP';
  private country: string = 'IL';

  getCurrency(): string {
    return this.currency;
  }

  updateCurrency(newCurrency: string): string {
    this.currency = newCurrency;
    return this.currency;
  }

  getCountry(): string {
    return this.country;
  }

  updateCountry(newCountry: string): string {
    this.country = newCountry;
    return this.country;
  }
}
