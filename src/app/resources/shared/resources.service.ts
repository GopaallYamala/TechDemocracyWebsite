import { Injectable } from '@angular/core';
import { RestService } from 'src/shared/services/rest.service';

@Injectable({
  providedIn: 'root'
})

export class ResourceService extends RestService {

  saveStrapiJson(json: any) {
    const saveRecords = '/api/resource/create';
    return this.post(saveRecords, json);
  }

  getAllResources() {
    const getAllResourcesByUrl = '/api/resource/get';
    return this.get(getAllResourcesByUrl);
  }

  getResource(id: number) {
    const getResourceByUrl = '/api/resource/get' + `/${id}`;
    return this.get(getResourceByUrl);
  }

  updateResource(id: number, json: any) {
    const updateRecords = '/api/resource/update' + `/${id}`;
    return this.put(updateRecords, json);
  }

  deleteResource(id: any) {
    const deleteResourceByUrl = '/api/resource/remove' + `/${id}`;
    return this.delete(deleteResourceByUrl);
  }

}
