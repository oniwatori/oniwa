import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

import { ElectricityService } from '../../../core/data/electricity.service';
import { Principal, LoginModalService, LoginService } from 'app/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-greeting',
    styleUrls: ['./greeting.component.scss'],
    templateUrl: './greeting.component.html'
})
export class GreetingComponent implements OnInit, OnDestroy {
    data: Array<any>;
    type = 'week';
    types = ['week', 'month', 'year'];
    account: Account;
    modalRef: NgbModalRef;

    currentTheme: string;
    themeSubscription: any;

    constructor(
        private principal: Principal,
        private loginService: LoginService,
        private loginModalService: LoginModalService,
        private eService: ElectricityService,
        private themeService: NbThemeService,
        private router: Router
    ) {
        this.data = this.eService.getData();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }

    ngOnInit() {
        this.principal.identity().then(account => {
            this.account = account;
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

    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}
