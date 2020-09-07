import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Intro } from '../info'

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  intro = {
    tagLine: 'SUCCESS',
    title: 'How We Help You To Sell Your Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
  };

  introContents : Intro[];

  constructor( private config: ConfigService) { }

  ngOnInit() {
    this.getIntro()
  }

  getIntro(): void {
    this.introContents = this.config.getIntro();
  }

}
