import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  PostTypes(type) {
    return this.http.post(`${environment.apiUrl}/api/types`, type);
  }

  PostHardware(hardware) {
    return this.http.post(`${environment.apiUrl}/api/hardware`, hardware);
  }
}
