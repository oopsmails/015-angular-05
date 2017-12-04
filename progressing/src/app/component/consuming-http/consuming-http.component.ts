import { NotFoundError } from '../../common/not-found-error';
import { BadInput } from '../../common/bad-input';
import { AppError } from '../../common/app-error';
import { PostsService } from '../../service/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-consuming-http',
  templateUrl: './consuming-http.component.html',
  styleUrls: ['./consuming-http.component.css']
})
export class ConsumingHttpComponent implements OnInit {
    private allPosts: any[];

    private allPostSubject = new Subject<any[]>();
 
    // pager object
    pager: any = {};
 
    // paged items
    posts: any[];

  // pageNumber: number;
  // itemCount: number;
  // itemsPerPage: number;
  numberOfPageCombine: number;
  backgroundType: string;
  hiddenArrows: boolean;
  disableNavigation: boolean;

  loading = false;
  itemCount = 0;
  pageNumber = 1;
  itemsPerPage = 5;
    

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    // this.getPostsSubject({ page: this.pageNumber, itemsPerPage: this.itemsPerPage });
    // this.allPostSubject.subscribe(
    //      postsRet => {
    //        this.itemCount = postsRet.length;
    //         this.allPosts = postsRet;
    //         this.posts = postsRet.splice(1, this.itemsPerPage);
    //         this.loading = false;
    //     })


    this.getPosts({ page: this.pageNumber, itemsPerPage: this.itemsPerPage });
  }

  getPosts(pageInfo): void {
    this.loading = true;
    this.service.getAll().subscribe(postsRet => {
        this.itemCount = postsRet.length;
        this.allPosts = postsRet;
        this.posts = postsRet.splice(1, pageInfo.itemsPerPage);
        this.loading = false;
    });
  }

  getPostsSubject(pageInfo): void {
    this.loading = true;
    this.service.getAll().subscribe(postsRet => {
       this.allPostSubject.next(postsRet);     
    });
  }

  getPostsSwitchMap(pageInfo): void {
    this.loading = true;
    this.service.getAll().subscribe(postsRet => {
       this.allPosts = postsRet;
      this.itemCount = this.allPosts.length;
      this.loading = false;
    });
  }

  getPostsPromise(pageInfo): void {
    this.service.getAllPromise().then(postsRet => {
      this.allPosts = postsRet;
      this.itemCount = this.allPosts.length;
      this.posts = this.allPosts.splice(1, pageInfo.itemsPerPage);
      this.loading = false;
    });
    
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
            this.posts.splice(0, 0, post);
          },
          (error: AppError) => {
            if (error instanceof BadInput) {
              // this.form.setErrors(error.originalError);
            }
            else throw error;
          });
  }

  updatePost(post) {
    this.service.update(post)
      .subscribe(
        updatedPost => {
          console.log(updatedPost);
        });
  }

  deletePost(post) {
    this.service.delete(post.id)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted.');
          else throw error;
        });
  }

  onPageChange(indexRet: number[]): void {
    indexRet.forEach((item: number) => {
      console.log('pageClick, index array: ', item);
    });
  }

}
