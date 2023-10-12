import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {
      id: '1',
      title: 'this title',
      url: 'this-title',
      body: 'this body'
    },
    {
      id: '2',
      title: 'this 2',
      url: 'title-2',
      body: 'body 2'
    },
    {
      id: '3',
      title: 'this 3',
      url: 'title-3',
      body: 'body 3'
    }
  ]

  constructor() {
    const local_posts = localStorage.getItem('posts');
    // console.log(local_posts);
    if (local_posts) {
      this.posts = JSON.parse(local_posts);
    } else {
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
    // localStorage.removeItem('posts');
  }

  getList() {
    return this.posts;
  }

  get(id: string) {
    return { ...this.posts.find(p => p.id === id) };
  }

  getBy(url?: string) {
    return { ...this.posts.find(p => p.url === url) };
  }

  update(post: any) {
    let index: any;
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === post.id) {
        index = i;
        break;
      }
    }

    this.posts[index] = post;

    this.saveInDB(this.posts);
    return true;
  }

  create(post: any) {
    const id = Date.now().toString();
    post.id = id;
    this.posts.push(post);
    this.saveInDB(this.posts);
    return true;
  }

  delete(id: string) {
    this.posts = this.posts.filter(p => p.id !== id);
    this.saveInDB(this.posts);
    console.log(this.posts);
    return true;
  }

  saveInDB(posts: any) {
    console.log(posts);
    // localStorage.setItem("posts", JSON.stringify(posts))
  }


}
