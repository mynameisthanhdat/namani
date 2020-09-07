import { Injectable } from '@angular/core';
// import { configuation } from './configuation';

import { Header, Intro, Post } from './info';
import { HEADER, INTRO, POST } from './mock-info';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // config = configuation;

  constructor() { }

  getHeader(): Header[] {
    return HEADER;
  }

  getIntro(): Intro[] {
    return INTRO;
  }

  getPost(): Post[] {
    return POST;
  }

  getPostById (id: number) {
    return this.getPost[ id - 1 ];
  }
}
