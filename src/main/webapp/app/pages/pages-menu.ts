import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'global.menu.page.dashboard',
        icon: 'nb-home',
        link: '/dashboard'
    },
    {
        title: 'global.menu.page.features',
        group: true
    },
    {
        title: 'global.menu.page.extraComponents',
        icon: 'nb-star',
        children: [
            {
                title: 'global.menu.page.calendar',
                link: '/extra-components/calendar'
            },
            {
                title: 'global.menu.page.stepper',
                link: '/extra-components/stepper'
            },
            {
                title: 'global.menu.page.list',
                link: '/extra-components/list'
            },
            {
                title: 'global.menu.page.infiniteList',
                link: '/extra-components/infinite-list'
            },
            {
                title: 'global.menu.page.accordion',
                link: '/extra-components/accordion'
            },
            {
                title: 'global.menu.page.progressBar',
                link: '/extra-components/progress-bar'
            },
            {
                title: 'global.menu.page.spinner',
                link: '/extra-components/spinner'
            },
            {
                title: 'global.menu.page.alert',
                link: '/extra-components/alert'
            },
            {
                title: 'global.menu.page.tree',
                link: '/extra-components/tree'
            },
            {
                title: 'global.menu.page.tabs',
                link: '/extra-components/tabs'
            },
            {
                title: 'global.menu.page.calendarKit',
                link: '/extra-components/calendar-kit'
            },
            {
                title: 'global.menu.page.chat',
                link: '/extra-components/chat'
            },
            {
                title: 'global.menu.page.toastr',
                link: '/extra-components/toastr'
            },
            {
                title: 'global.menu.page.popover',
                link: '/extra-components/popover'
            }
        ]
    },
    {
        title: 'global.menu.page.editors',
        icon: 'nb-title',
        children: [
            {
                title: 'global.menu.page.ckEditor',
                link: '/editors/ckeditor'
            }
        ]
    }
];
