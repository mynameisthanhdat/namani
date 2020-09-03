import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service'

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

  introContents = [
    {
      icon: 'fa fa-html5 fa-2x',
      title: 'HTML5 & CSS3',
      description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico'
    },
    {
      icon: 'fa fa-bolt fa-2x',
      title: 'Easy to Use',
      description: 'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'
    },
    {
      icon: 'fa fa-tablet fa-2x',
      title: 'Fully Responsive',
      description: 'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'
    },
    {
      icon: 'fa fa-rocket fa-2x',
      title: 'Parallax Effect',
      description: 'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
