import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<any>(`${environment.apiUrl}/api/users`);
  }

  node_register(user) {
    return this.http.post(`${environment.apiUrl}/api/users`, user);
  }
}
