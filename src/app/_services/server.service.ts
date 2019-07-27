import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";

@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {}

  getTypes() {
    return this.http.get<any[]>("http://localhost:3000/api/types");
  }
}
