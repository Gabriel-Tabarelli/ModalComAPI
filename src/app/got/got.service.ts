import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class GotService {
    constructor(
        private httpClientGame: HttpClient
    ) {}

    getTagsGames(): Observable<{ family: any, firstName: any, fullName: any, id: any, imageUrl: any, lastName: any, title: any }[]> {
        return this.httpClientGame.get<{ family: any, firstName: any, fullName: any, id: any, imageUrl: any, lastName: any, title: any }[]>('https://thronesapi.com/api/v2/Characters');
    }
}