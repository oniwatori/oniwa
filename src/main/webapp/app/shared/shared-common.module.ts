import { NgModule } from '@angular/core';

import { OniwaSharedLibsModule, FindLanguageFromKeyPipe, NgxAlertComponent, NgxAlertErrorComponent } from './';

@NgModule({
    imports: [OniwaSharedLibsModule],
    declarations: [FindLanguageFromKeyPipe, NgxAlertComponent, NgxAlertErrorComponent],
    exports: [OniwaSharedLibsModule, FindLanguageFromKeyPipe, NgxAlertComponent, NgxAlertErrorComponent]
})
export class OniwaSharedCommonModule {}
