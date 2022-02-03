import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-index',
  templateUrl: './post-index.component.html',
  styleUrls: ['./post-index.component.css'],
  providers: [PostService]
})

export class PostIndexComponent implements OnInit {

  //private getSubscribe;

  constructor(private service: PostService) {
    //this.getSubscribe = {};
  }

  ngOnInit(): void {
    this.service.get()
      .subscribe(function (response) {
        //
      });
  }

}
