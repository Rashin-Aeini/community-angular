import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../models/get.post';
import { PostFilter } from '../models/get.post.filter';
import { Posts } from '../models/get.posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css'],
  providers: [PostService]
})

export class PostIndexComponent implements OnInit, DoCheck {

  //private getSubscribe : Subscription = any;

  pages: number = 0;
  posts: Post[] = [];

  filter: PostFilter = {
    sort: '',
    type: '',
    search: '',
    page: 1
  };

  watcher: KeyValueDiffer<string, any>;

  constructor(private service: PostService, private router: Router, private differs: KeyValueDiffers) {
    this.watcher = differs.find({}).create();
  }

  ngDoCheck(): void {
    if (this.watcher.diff(this.filter)) {
      this.fetch();
    }
  }

  ngOnInit(): void {
    this.fetch();
  }

  deletePost(id: number): void {
    // event.target.value
    let subscribe: Subscription = this.service.delete(id)
      .subscribe(response => {
        this.filter = {
          sort: '',
          type: '',
          search: '',
          page: 1
        };

        this.fetch();

        subscribe.unsubscribe();
      });
  }

  fetch(): void {
    let subscribe: Subscription = this.service.get(this.filter)
      .subscribe(response => {
        this.pages = response.pages;
        this.posts = response.result

        subscribe.unsubscribe();
      });
  }

  sorting(field: string): void {
    if (this.filter.sort == field) {
      this.filter.type = this.filter.type == 'Asc' ? 'Desc' : 'Asc';
    } else {
      this.filter = { ...this.filter, sort: field, type: 'Asc' };
    }
  }

}
