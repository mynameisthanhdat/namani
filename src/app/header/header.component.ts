import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = { 
    heading: 'My website',
    headingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil impedit quos tempora assumenda voluptatibus architecto, ipsam quaerat numquam, alias cupiditate animi! Veritatis numquam quasi eveniet eos beatae aperiam dolor.',
    buttonText: "Let's started",
    buttonLink: '/home'
  };

  header1 = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.header1 = this.getHeader();
  }

  getHeader() {
    return this.config.getConfig().header;
  }

}
