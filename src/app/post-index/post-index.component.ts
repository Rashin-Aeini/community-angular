import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/get.post';
import { Posts } from '../models/get.posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css'],
  providers: [PostService]
})

export class PostIndexComponent implements OnInit {

  //private getSubscribe : Subscription = any;

  pages: number = 0;
  posts: Post[] = [];

  sort: string = '';
  type: string = '';

  constructor(private service: PostService) {
    //this.getSubscribe = {};
    //let mine : Post = {};
  }

  ngOnInit(): void {

    this.service.get({
      search: '', sort: this.sort,
      type: this.type, page: 1
    })
      .subscribe(response => {
        this.pages = response.pages;
        this.posts = response.result
      });

  }

  deletePost(id: number): void {
    // event.target.value
  }

}
