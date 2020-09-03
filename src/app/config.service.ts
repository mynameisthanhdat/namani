import { Injectable } from '@angular/core';
import { configuation } from './configuation';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuation;

  constructor() { }

  getConfig() {
    return this.config;
  }
}
