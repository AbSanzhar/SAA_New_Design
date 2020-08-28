import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {CookieService} from './cookie.service';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private language;
    currentLanguage;

    constructor(private cookieService: CookieService) {
        if(!this.cookieService.getCookie('language')) {
            this.cookieService.setCookie('language', 'ru', 1);
            this.language = new BehaviorSubject('ru');
            this.currentLanguage = this.language.asObservable();
        } else {
            this.language = new BehaviorSubject(this.cookieService.getCookie('language'));
            this.currentLanguage = this.language.asObservable();
        }
    }

    changeLanguage(language) {
        this.language.next(language);
        console.log(language);
        this.cookieService.setCookie('language', language, 1);
    }
}
