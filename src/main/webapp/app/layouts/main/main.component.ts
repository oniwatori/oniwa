import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';
import { delay, withLatestFrom, takeWhile } from 'rxjs/operators';

import { JhiLanguageHelper } from 'app/core';
import { NbMenuService, NbThemeService, NbMediaBreakpointsService, NbSidebarService, NbMenuItem, NbMediaBreakpoint } from '@nebular/theme';
import { StateService } from 'app/core/data/state.service';

@Component({
    selector: 'ngx-main',
    styleUrls: ['./main.component.scss'],
    templateUrl: './main.component.html'
})
export class NgxMainComponent implements OnInit, OnDestroy {
    subMenu: NbMenuItem[] = [
        {
            title: 'PAGE LEVEL MENU',
            group: true
        },
        {
            title: 'Buttons',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/buttons'
        },
        {
            title: 'Grid',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/grid'
        },
        {
            title: 'Icons',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/icons'
        },
        {
            title: 'Modals',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/modals'
        },
        {
            title: 'Typography',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/typography'
        },
        {
            title: 'Animated Searches',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/search-fields'
        },
        {
            title: 'Tabs',
            icon: 'ion ion-android-radio-button-off',
            link: '/pages/ui-features/tabs'
        }
    ];
    layout: any = {};
    sidebar: any = {};

    private alive = true;

    currentTheme: string;
    constructor(
        private jhiLanguageHelper: JhiLanguageHelper,
        private router: Router,
        protected stateService: StateService,
        protected menuService: NbMenuService,
        protected themeService: NbThemeService,
        protected bpService: NbMediaBreakpointsService,
        protected sidebarService: NbSidebarService
    ) {
        this.stateService
            .onLayoutState()
            .pipe(takeWhile(() => this.alive))
            .subscribe((layout: string) => (this.layout = layout));

        this.stateService
            .onSidebarState()
            .pipe(takeWhile(() => this.alive))
            .subscribe((sidebar: string) => {
                this.sidebar = sidebar;
            });

        const isBp = this.bpService.getByName('is');
        this.menuService
            .onItemSelect()
            .pipe(
                takeWhile(() => this.alive),
                withLatestFrom(this.themeService.onMediaQueryChange()),
                delay(20)
            )
            .subscribe(([item, [bpFrom, bpTo]]: [any, [NbMediaBreakpoint, NbMediaBreakpoint]]) => {
                if (bpTo.width <= isBp.width) {
                    this.sidebarService.collapse('menu-sidebar');
                }
            });

        this.themeService
            .getJsTheme()
            .pipe(takeWhile(() => this.alive))
            .subscribe(theme => {
                this.currentTheme = theme.name;
            });
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : 'oniwaApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.jhiLanguageHelper.updateTitle(this.getPageTitle(this.router.routerState.snapshot.root));
            }
        });
    }

    ngOnDestroy() {
        this.alive = false;
    }
}
