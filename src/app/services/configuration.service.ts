import { Injectable } from '@angular/core';
import { Configuration } from '../types/configuration.interface';

@Injectable()
export class ConfigurationService {
  public config: Configuration = {
    favourite: false,
  }

  constructor() {}

  public enableDisableFavourite() {
    this.config.favourite = !this.config.favourite;
  }
}
