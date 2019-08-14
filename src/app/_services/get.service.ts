import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";

@Injectable()
export class GetService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<any>(`${environment.apiUrl}/api/users/me`);
  }

  getTypes() {
    return this.http.get<any[]>(`${environment.apiUrl}/api/types`);
  }

  getHardware() {
    return this.http.get<any[]>(`${environment.apiUrl}/api/hardware`);
  }
}
