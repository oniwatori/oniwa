import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageComponent } from './page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    pageTitle: 'global.menu.page.dashboard'
                }
            },
            {
                path: 'extra-components',
                loadChildren: './extra-components/extra-components.module#ExtraComponentsModule'
            },
            {
                path: 'editors',
                loadChildren: './editors/editors.module#EditorsModule'
            },
            {
                path: 'miscellaneous',
                loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule'
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: '**',
                component: NotFoundComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {}
