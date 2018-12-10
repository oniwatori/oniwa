import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'nb-home',
        link: '/dashboard'
    },
    {
        title: 'FEATURES',
        group: true
    },
    {
        title: 'Extra Components',
        icon: 'nb-star',
        children: [
            {
                title: 'Calendar',
                link: '/extra-components/calendar'
            },
            {
                title: 'Stepper',
                link: '/extra-components/stepper'
            },
            {
                title: 'List',
                link: '/extra-components/list'
            },
            {
                title: 'Infinite List',
                link: '/extra-components/infinite-list'
            },
            {
                title: 'Accordion',
                link: '/extra-components/accordion'
            },
            {
                title: 'Progress Bar',
                link: '/extra-components/progress-bar'
            },
            {
                title: 'Spinner',
                link: '/extra-components/spinner'
            },
            {
                title: 'Alert',
                link: '/extra-components/alert'
            },
            {
                title: 'Tree',
                link: '/extra-components/tree'
            },
            {
                title: 'Tabs',
                link: '/extra-components/tabs'
            },
            {
                title: 'Calendar Kit',
                link: '/extra-components/calendar-kit'
            },
            {
                title: 'Chat',
                link: '/extra-components/chat'
            },
            {
                title: 'Toastr',
                link: '/extra-components/toastr'
            },
            {
                title: 'Popover',
                link: '/extra-components/popover'
            }
        ]
    },
    {
        title: 'Editors',
        icon: 'nb-title',
        children: [
            {
                title: 'CKEditor',
                link: '/editors/ckeditor'
            }
        ]
    }
];
