import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class HomeService {

    constructor(
        private httpClientDog: HttpClient,
        private httpClientCats: HttpClient,
    ) {}

    getTagsDogs(): Observable<string[]> {
        return this.httpClientDog.get<string[]>('https://random.dog/doggos');
    }

    getTagsCats(): Observable<string[]> {
        return this.httpClientCats.get<string[]>('https://cataas.com/api/tags');
    }
}