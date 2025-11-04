// Links on the Nav Bar
export const NavLinkData = [
    {
        id: 1,
        route: '/',
        text: 'HOME',
        subMenu: null
    },
    {
        id: 2,
        route: '/TheCollective',
        text: 'THE COLLECTIVE',
        subMenu: null
    },
    {
        id: 3,
        route: '/Offerings',
        text: 'OFFERINGS',
        subMenu: null
    },
    {
        id: 4,
        route: '/Store',
        text: 'SHOP THE VIBE',
        subMenu: [
            {
                id: 0,
                route: '/Store',
                text: 'STORE'
            },
            {
                id: 1,
                route: 'https://app.squareup.com/gift/MLNVK8WKMBMAA/order',
                text: 'GIFT CARDS'
            }
        ]
    },
    {
        id: 5,
        route: '/EventCalendar',
        text: 'EVENT CALENDAR',
        subMenu: null
    },
    {
        id: 7,
        route: '/CurrentVibe',
        text: 'BLOG',
        subMenu: null
    }
    
]