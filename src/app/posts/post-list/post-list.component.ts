import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
      // { title: 'First Post', content: 'This is the 1 post'},
      // { title: 'Second Post', content: 'This is the 2 post'},
      // { title: 'Third Post', content: 'This is the 3 post'},
  // ];

  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;


  constructor(public postsService: PostsService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
