module.exports = {
    base: '/manualy/',
    title: 'Dokumentace Shopťák.cz',
    head: [
        ['link', { rel: 'icon', href: 'https://ik.imagekit.io/alexborecky/shoptetak/Favicons/favicon-32x32_ClOuZmOTMJ.png'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        searchPlaceholder: 'Search...',
        smoothScroll: true,
        logo: 'https://ik.imagekit.io/alexborecky/shoptetak/logo_2Fvujvwpv.png',
        nav: [
            { 
                text: 'Dashboard', 
                link: '/' 
            },
            { 
                text: 'Šablony', 
                items: [
                    // { text: 'Nefrit', link: '/nefrit/'},
                    { text: 'Adamin', link: '/adamin/'},
                    { text: 'Opal', link: '/opal/'},
                    { text: 'Celestin', link: '/celestin/'},
                    { text: 'Rubin', link: '/rubin/'},
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
            { text: 'Shopťák.cz', link: 'https://shoptak.cz/' },
            {
                text: '🇨🇿',
                items: [
                    {text: '🇨🇿 Čeština', link: '/'},
                    {text: '🇬🇧 English', link: 'https://shoptak.cz/en/documentation', target: '_self'},
                ]
            }
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
                        'opal-bannery',
                    ]
                },
                {
                    title: 'Nefrit',
                    collapsable: false,
                    children: [
                        'nefrit',
                        'nefrit-form',
                        'nefrit-bannery'
                    ]
                }
            ],
            '/nefrit/': [
                {
                  title: 'Nefrit',
                  collapsable: false,
                  children: [
                    '',
                    'instalace',
                    'rozsirene-nastaveni',
                    'bannery',
                    'produkt-na-hp',
                    'platebni-metody',
                    'zprava-paticky',
                  ]
                }
            ],
            '/rubin/': [
                {
                  title: 'Rubin',
                  collapsable: false,
                  children: [
                    '',
                    'instalace',
                    'carousel',
                    'bannery-vyhod',
                    'vypis-variant',
                  ]
                }
            ],
            '/adamin/': [
                {
                  title: 'Adamin',
                  collapsable: false,
                  children: [
                    '',
                    'instalace',
                    'administrace-shoptetu',
                    'filtry',
                    'bannery-vyhod.md',
                    'produkty-na-radek',
                    'skryti-pocitadel',
                    'vlastni-blog',
                    'oblibene-kategorie',
                  ]
                }
            ],
            '/opal/': [
                {
                  title: 'Opal',
                  collapsable: false,
                  children: [
                    '',
                    'instalace',
                    'nastaveni-carouselu',
                    'nastaveni-banneru',
                    'obrazkove-bannery',
                    'velikost-banneru',
                    'pozicovani-textu',
                    'velikost-obrazku',
                    'galerie',
                    'vypis-variant',
                    'preskrtnuta-cena',
                    'mnozstvi-zbozi',
                    'socialni-site',
                    'platebni-metody',
                    'url-obrazku',
                  ]
                }
            ],
            '/celestin/': [
                {
                  title: 'Celestin',
                  collapsable: false,
                  children: [
                    '',
                    'instalace',
                    'light-mode',
                    'bannery-vyhod',
                    'dynamicke-bannery',
                    'hp-kategorie',
                    'hp-novinky',
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