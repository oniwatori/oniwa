import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Ng2Webstorage } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OniwaSharedModule } from 'app/shared';
import { CoreModule } from 'app/core';
import { AppRoutingModule } from './app-routing.module';
import { PageModule } from './pages/page.module';
import { OniwaAccountModule } from './account/account.module';
import { OniwaEntityModule } from './entities/entity.module';
import * as moment from 'moment';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { NavbarComponent, FooterComponent, PageRibbonComponent, ActiveMenuDirective, ErrorComponent } from './layouts';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { ThemeModule } from './layouts/theme.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'ngx', separator: '-' }),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            alertTimeout: 5000,
            i18nEnabled: true,
            defaultI18nLang: 'vi'
        }),
        OniwaSharedModule.forRoot(),
        ThemeModule.forRoot(),
        CoreModule.forRoot(),
        PageModule,
        OniwaAccountModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        OniwaEntityModule
    ],
    declarations: [AppComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    }
}
