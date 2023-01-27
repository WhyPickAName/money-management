import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class MoneyService {
    constructor(private http: HttpClient){
    }

    private apiBaseUrl = '';

    getMyMoney(): Observable<any> {
        return this.http.get(this.apiBaseUrl + '/api/mymoney');
    }

    setMyMoney(myMoney: any): void {
        this.http.post(this.apiBaseUrl + '/api/mymoney', myMoney)
    }
}