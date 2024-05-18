import { Injectable } from '@nestjs/common';
import { currencies } from 'src/data/currencies';
import { countries } from 'src/data/countries';
import { Country } from 'src/interfaces/country.interface';
import { CurrencyCode } from 'src/interfaces/currency.interface';

@Injectable()
export class SettingsService {
  private currencies = currencies;
  private countries = countries;
  private currency: string = CurrencyCode.GBP;
  private country = { code: 'IL', name: 'Israel' };

  getCurrency(): string {
    return this.currency;
  }

  updateCurrency(newCurrency: string): string {
    this.currency = newCurrency;
    return this.currency;
  }

  getCountry(): Country {
    return this.country;
  }

  updateCountry(newCountry: Country): Country {
    this.country = newCountry;
    return this.country;
  }

  getCountries() {
    return this.countries;
  }

  getCurrencies() {
    return this.currencies;
  }
}
