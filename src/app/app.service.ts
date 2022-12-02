
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(
        private httpClientDog: HttpClient,
        private httpClientCats: HttpClient,
        private httpClientGame: HttpClient
    ) {}

    getTagsDogs(): Observable<string[]> {
        return this.httpClientDog.get<string[]>('https://random.dog/doggos');
    }

    getTagsCats(): Observable<string[]> {
        return this.httpClientCats.get<string[]>('https://cataas.com/api/tags');
    }

    getTagsGames(): Observable<{ imageUrl }[]> {
        return this.httpClientGame.get<{ imageUrl }[]>('https://thronesapi.com/api/v2/Characters');
    }

}
