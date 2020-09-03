import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  testimonials = {
    tagLine: 'FEEDBACK',
    title: 'What our customers are saying',
  }

  testimonialsContent = [
    {
      image: 'assets/images/user-images/user-1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua',
      customer: 'John Doe - Happy Customer'
    },
    {
      image: 'assets/images/user-images/user-2.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua',
      customer: 'Roslyn Doe - Happy Customer'
    },
    {
      image: 'assets/images/user-images/user-3.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlaboreet dolore magna aliqua',
      customer: 'Thomas Doe - Happy Customer'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
