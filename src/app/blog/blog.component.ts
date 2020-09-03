import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog = {
    tagLine: 'MY BLOG',
    title: 'Thoughts is thing...'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
