import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

import { Header } from '../info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header : Header[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.getHeader();
  }

  getHeader(): void {
    this.header = this.config.getHeader()
  }

}
