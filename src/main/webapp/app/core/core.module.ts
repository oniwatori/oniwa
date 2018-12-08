import { ModuleWithProviders, NgModule, LOCALE_ID, SkipSelf, Optional } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import locale from '@angular/common/locales/vi';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

export const NB_CORE_PROVIDERS = [...DataModule.forRoot().providers, AnalyticsService];

@NgModule({
    imports: [HttpClientModule],
    exports: [],
    declarations: [],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'vi'
        },
        DatePipe
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: CoreModule,
            providers: [...NB_CORE_PROVIDERS]
        };
    }
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
        registerLocaleData(locale);
    }
}
