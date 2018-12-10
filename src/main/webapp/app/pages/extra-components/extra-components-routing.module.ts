import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraComponentsComponent } from './extra-components.component';
import { TreeComponent } from './tree/tree.component';
import { AlertComponent } from './alert/alert.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChatComponent } from './chat/chat.component';
import { Tab1Component, Tab2Component, TabsComponent } from './tabs/tabs.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NebularFormInputsComponent } from './form-inputs/nebular-form-inputs.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { ListComponent } from './list/list.component';
import { StepperComponent } from './stepper/stepper.component';
import { CalendarKitFullCalendarShowcaseComponent } from './calendar-kit/calendar-kit.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ToastrComponent } from './toastr/toastr.component';

const routes: Routes = [
    {
        path: '',
        component: ExtraComponentsComponent,
        children: [
            {
                path: 'calendar',
                component: CalendarComponent,
                data: {
                    pageTitle: 'global.menu.page.calendar'
                }
            },
            {
                path: 'stepper',
                component: StepperComponent,
                data: {
                    pageTitle: 'global.menu.page.stepper'
                }
            },
            {
                path: 'list',
                component: ListComponent,
                data: {
                    pageTitle: 'global.menu.page.list'
                }
            },
            {
                path: 'infinite-list',
                component: InfiniteListComponent,
                data: {
                    pageTitle: 'global.menu.page.infiniteList'
                }
            },
            {
                path: 'form-inputs',
                component: NebularFormInputsComponent,
                data: {
                    pageTitle: 'global.menu.page.formInputs'
                }
            },
            {
                path: 'accordion',
                component: AccordionComponent,
                data: {
                    pageTitle: 'global.menu.page.accordion'
                }
            },
            {
                path: 'progress-bar',
                component: ProgressBarComponent,
                data: {
                    pageTitle: 'global.menu.page.progressBar'
                }
            },
            {
                path: 'spinner',
                component: SpinnerComponent,
                data: {
                    pageTitle: 'global.menu.page.spinner'
                }
            },
            {
                path: 'alert',
                component: AlertComponent,
                data: {
                    pageTitle: 'global.menu.page.alert'
                }
            },
            {
                path: 'tree',
                component: TreeComponent,
                data: {
                    pageTitle: 'global.menu.page.tree'
                }
            },
            {
                path: 'tabs',
                component: TabsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'tab1',
                        pathMatch: 'full'
                    },
                    {
                        path: 'tab1',
                        component: Tab1Component
                    },
                    {
                        path: 'tab2',
                        component: Tab2Component
                    }
                ],
                data: {
                    pageTitle: 'global.menu.page.tabs'
                }
            },
            {
                path: 'calendar-kit',
                component: CalendarKitFullCalendarShowcaseComponent,
                data: {
                    pageTitle: 'global.menu.page.calendarKit'
                }
            },
            {
                path: 'chat',
                component: ChatComponent,
                data: {
                    pageTitle: 'global.menu.page.chat'
                }
            },
            {
                path: 'popover',
                component: PopoversComponent,
                data: {
                    pageTitle: 'global.menu.page.popover'
                }
            },
            {
                path: 'toastr',
                component: ToastrComponent,
                data: {
                    pageTitle: 'global.menu.page.toastr'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtraComponentsRoutingModule {}
