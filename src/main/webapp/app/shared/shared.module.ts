import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { OniwaSharedLibsModule, OniwaSharedCommonModule, NgxLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [OniwaSharedLibsModule, OniwaSharedCommonModule],
    declarations: [NgxLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [NgxLoginModalComponent],
    exports: [OniwaSharedCommonModule, NgxLoginModalComponent, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OniwaSharedModule {
    static forRoot() {
        return {
            ngModule: OniwaSharedModule
        };
    }
}
