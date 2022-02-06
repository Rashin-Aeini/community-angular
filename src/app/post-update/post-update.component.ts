import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/get.category';
import { CreatePost } from '../models/post.create.post';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css'],
  providers: [PostService, CategoryService]
})
export class PostUpdateComponent implements OnInit {

  post: CreatePost = {
    title: '',
    thumbnail: '',
    content: '',
    categories: []
  };

  categories: Category[] = [];

  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService,
    private category: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = parseInt(params['id']); });

    this.service.getById(this.id)
      .subscribe(
        (response: CreatePost) => {
          this.post = response;
        },
        (error: HttpErrorResponse) => {
          if (error.status == 400) {
            this.router.navigate(['/post']);
          }
        },
        null
      );

    this.category.get({
      search: '',
      page: 1,
      size: -1
    }).subscribe(response => {
      this.categories = response.result;
    });

  }

  checkCategories(id: number): void {
    if (this.post.categories.filter(item => item == id).length == 0) {
      this.post.categories.push(id);
    } else {
      this.post.categories = this.post.categories.filter(item => item != id);
    }
  }

  checkedCategory(id: number): boolean {
    return this.post.categories.filter(item => item == id).length == 1;
  }

  sendData(): void {
    this.service
      .update(this.id, this.post)
      .subscribe(response => this.router.navigate(['/post']));
  }

}
