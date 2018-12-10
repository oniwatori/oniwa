import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { EditorsRoutingModule, routedComponents } from './editors-routing.module';
import { ThemeModule } from '../../layouts/theme.module';

@NgModule({
    imports: [ThemeModule, EditorsRoutingModule, CKEditorModule],
    declarations: [...routedComponents]
})
export class EditorsModule {}
