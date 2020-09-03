import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  pricing = {
    tagLine: 'YOUR CHOICE',
    title: 'We have the right package for you',
    description: ''
  }

  pricingContent = [
    {
      species: 'Personal',
      sub: 'The standard version',
      money: '19',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      download: '5 Downloads',
      extention: '2 Extensions',
      tutorial: 'Tutorials',
      forum: 'Forum Support',
      year: '1 year free updates',
      featured: false
    },
    {
      species: 'Student',
      sub: 'The standard version',
      money: '29',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      download: '15 Downloads',
      extention: '22 Extensions',
      tutorial: 'Tutorials',
      forum: 'Forum Support',
      year: '2 year free updates',
      featured: true
    },
    {
      species: 'Business',
      sub: 'The standard version',
      money: '39',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      download: 'Unlimited Downloads',
      extention: 'Unlimited Extensions',
      tutorial: 'HD Video Tutorials',
      forum: 'Chat Support',
      year: 'Lifetime free updates',
      featured: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
