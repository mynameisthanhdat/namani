import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';
import { Post } from '../info';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post : Post;

  constructor( 
    private route: ActivatedRoute, 
    private config: ConfigService, 
    private location: Location ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post = this.getPostById(id).subcribe(postId => this.post = postId);
  }

  getPostById(id:number) {
    return this.config.getPostById(id);
  }

  goBack(): void {
    this.location.back();
  }

}
