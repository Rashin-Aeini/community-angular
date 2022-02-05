import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Category } from '../models/get.category';
import { CreatePost } from '../models/post.create.post';
import { CategoryService } from '../services/category.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers: [CategoryService, PostService]
})
export class PostCreateComponent implements OnInit {

  categories: Category[] = [];

  post: CreatePost = {
    title: '',
    thumbnail: '',
    content: '',
    categories: []
  };

  constructor(private category: CategoryService, private service: PostService, private router: Router) { }

  ngOnInit(): void { //useEffect

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

  sendData(): void {
    this.service.post(this.post)
      .subscribe(response => {
        this.router.navigate(['/post']);
      });
  }

}
