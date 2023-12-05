import { Injectable } from '@angular/core';
import { RestService } from 'src/shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})

export class BlogService extends RestService {

  saveStrapiJson(json: any) {
    const saveRecords = '/api/blog/create';
    return this.post(saveRecords, json);
  }

  getAllBlogs() {
    const getAllBlogsByUrl = '/api/blog/get';
    return this.get(getAllBlogsByUrl);
  }

  getBlog(strapiId: number) {
    const getBlogByUrl = '/api/blog/get' + `/${strapiId}`;
    return this.get(getBlogByUrl);
  }

  updateBlog(strapiId: number, json: any) {
    const updateRecords = '/api/blog/update' + `/${strapiId}`;
    return this.post(updateRecords, json);
  }

  deleteBlog(strapiId: any) {
    const deleteBlogByUrl = '/api/blog/remove' + `/${strapiId}`;
    return this.delete(deleteBlogByUrl);
  }

}
