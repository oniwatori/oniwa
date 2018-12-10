import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { LoginModalService, Principal, Account, LoginService, JhiLanguageHelper } from 'app/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'ngx-page',
    templateUrl: './page.component.html',
    styleUrls: ['page.component.scss']
})
export class PageComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    menu = MENU_ITEMS;

    constructor(
        private jhiLanguageHelper: JhiLanguageHelper,
        private loginService: LoginService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private router: Router
    ) {
        this.menu = jhiLanguageHelper.updateMenu(this.menu);
        console.log(this.menu);
    }

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', message => {
            this.principal.identity().then(account => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    logout() {
        this.loginService.logout();
        this.router.navigate(['']);
    }
}
