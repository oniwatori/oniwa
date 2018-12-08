import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OniwaSharedModule } from 'app/shared';
import { PageComponent } from '.';
import { ThemeModule } from 'app/layouts/theme.module';
import { PageRoutingModule } from './page-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
    imports: [OniwaSharedModule, PageRoutingModule, ThemeModule, DashboardModule, MiscellaneousModule],
    declarations: [PageComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageModule {}
