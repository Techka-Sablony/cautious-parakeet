module.exports = {
    base: '/manualy/',
    title: 'Dokumentace Shopteťák.cz',
    head: [
        ['link', { rel: 'icon', href: 'https://ik.imagekit.io/alexborecky/shoptetak/Favicons/favicon-32x32_ClOuZmOTMJ.png'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        logo: 'https://ik.imagekit.io/alexborecky/shoptetak/logo_mxKFZoNmk67u.svg',
        nav: [
            { 
                text: 'Dashboard', 
                link: '/' 
            },
            { 
                text: 'Šablony', 
                items: [
                    { text: 'Opal', link: '/opal/'},
                    { text: 'Celestin', link: '/celestin/'},
                ]
            },
            { 
                text: 'Doplňky', 
                items: [
                    { text: 'Premium Carousel', link: '/premium-carousel/'},
                ]
            },
            { 
                text: 'Generátor kódu', 
                link: '/generator/',
            },
            { text: 'Shopteťák.cz', link: 'https://shoptetak.cz/' },
        ],
        sidebar: {
            '/generator/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                    ]
                },
                {
                    title: 'Opal',
                    collapsable: false,
                    children: [
                        'generator',
                    ]
                }
            ],
            '/opal/': [
                {
                  title: 'Opal',
                  collapsable: false,
                  children: [
                    '',
                    'velikost-obrazku',
                    'nastaveni-banneru',
                    'nastaveni-carouselu',
                    'url-obrazku',
                    'socialni-site',
                    'platebni-metody',
                    'mnozstvi-zbozi',
                  ]
                }
            ],
            '/celestin/': [
                {
                  title: 'Celestin',
                  collapsable: false,
                  children: [
                    '',
                    'bannery-vyhod',
                    'dynamicke-bannery',
                    'hp-kategorie',
                    'light-mode',
                    'winter-mode'
                  ]
                }
            ],
            '/premium-carousel/': [
                {
                  title: 'Premium Carousel',
                  collapsable: false,
                  children: [
                    '',
                    'umisteni-navigace',
                    'dark-mode',
                    'tlacitka',
                    'fotografie',
                  ]
                }
            ],
        },
    }
}