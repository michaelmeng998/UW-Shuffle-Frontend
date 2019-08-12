import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  PostTypes(type) {
    return this.http.post(`${environment.apiUrl}/api/types`, type);
  }
}
