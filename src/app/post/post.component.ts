import { Component, OnInit } from '@angular/core';

import { Post } from '../info';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  post : Post[];

  constructor(  private config: ConfigService ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.post = this.config.getPost()
  }

}
