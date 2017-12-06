import { BadInput } from '../../common/bad-input';
import { AppError } from '../../common/app-error';
import { PostsService } from '../../service/posts/posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NotFoundError } from '../../common/not-found-error';

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

  loading = false;
  itemCount = 0;
  pageNumber = 0;
  itemsPerPage = 5;

  numberOfPageCombine = 1;
  backgroundType = 'light';
  hiddenArrows = false;
  disableNavigation = false;

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    // this.getPosts({ page: this.pageNumber, itemsPerPage: this.itemsPerPage });
    this.getPosts({ page: 0, size: this.itemsPerPage });
  }

  getPosts(pageInfo): void {
    this.loading = true;
    this.service.getAll().subscribe(postsRet => {
      this.itemCount = postsRet.length;
      this.allPosts = postsRet;
      const startIndex = pageInfo.page * pageInfo.size;
      const endIndex = (startIndex + pageInfo.size) < this.allPosts.length ? (startIndex + pageInfo.size) : this.allPosts.length;
      this.posts = postsRet.slice(startIndex, endIndex);
      this.loading = false;
    });
  }

  getPostsNoHttpCall(pageInfo): void {
    this.loading = true;
    const startIndex = pageInfo.page * pageInfo.size;
    const endIndex = (startIndex + pageInfo.size) < this.allPosts.length ? (startIndex + pageInfo.size) : this.allPosts.length;
    this.posts = this.allPosts.slice(startIndex, endIndex);
    this.loading = false;
  }

  // getPostsSubject(pageInfo): void {
  //   this.loading = true;
  //   this.service.getAll().subscribe(postsRet => {
  //     this.allPostSubject.next(postsRet);
  //   });
  // }

  // getPostsSwitchMap(pageInfo): void {
  //   this.loading = true;
  //   this.service.getAll().subscribe(postsRet => {
  //     this.allPosts = postsRet;
  //     this.itemCount = this.allPosts.length;
  //     this.loading = false;
  //   });
  // }

  // getPostsPromise(pageInfo): void {
  //   this.service.getAllPromise().then(postsRet => {
  //     this.allPosts = postsRet;
  //     this.itemCount = this.allPosts.length;
  //     this.posts = this.allPosts.splice(1, pageInfo.itemsPerPage);
  //     this.loading = false;
  //   });

  // }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
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
        } else {
          throw error;
        }
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
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        const indexAll = this.allPosts.indexOf(post);
        this.allPosts.splice(indexAll, 1);
        this.itemCount = this.allPosts.length;
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          // no need to roll back because it is already deleted
          alert('This post has already been deleted.');
        } else {
          // roll back needed here ??
          // this.posts.push();
          throw error;
        }
      });
  }

  onPageChange(indexRet: number[]): void {
    // indexRet.forEach((item: number) => {
    //   console.log('pageClick, index array: ', item);
    // });
    this.pageNumber = indexRet[0];
    this.getPostsNoHttpCall({ page: this.pageNumber, size: this.itemsPerPage });
  }

}
