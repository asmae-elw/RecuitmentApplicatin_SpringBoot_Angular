import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostuleInfos } from '../board-user/postuleInfos';

@Injectable({providedIn: 'root'})
export class  PostuleInfosService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPostuleInfos(): Observable<PostuleInfos[]> {
    return this.http.get<PostuleInfos[]>(`${this.apiServerUrl}/postuleInfos/allPostuleInfos`);
    
  }

  public addPostuleInfos(postuleInfos: PostuleInfos): Observable<PostuleInfos> {
    return this.http.post<PostuleInfos>(`${this.apiServerUrl}/postuleInfos/addPostuleInfos`, postuleInfos);
  }
}