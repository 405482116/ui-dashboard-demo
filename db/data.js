const context = {
    title: "Demo",
    menu: [{
        "id": 0,
        "label": "DASHBOARD",
        "icon": "icon-dashboard",
        "link": 'dashborad'
    }, {
        "id": 1,
        "label": "AGENT",
        "icon": "icon-sitemap"

    }, {
        "id": 2,
        "label": "MY CRUSE",
        "icon": "icon-boat"
    }
        , {
        "id": 3,
        "label": "HELP",
        "icon": "icon-life-bouy"
    }
    ],
    table: [{
        id: 0,
        class: 'windows',
        type: 'idle',
        title: 'test123.123123.com',
        info: '192.168.1.102',
        folder: '/var/lib/....',
        isDeny: true,
        browserList: [{ name: 'Filefox' }, { name: 'Safari' }, { name: 'Ubuntu' }, { name: 'Chrome' }]

    }, {
        id: 1,
        class: 'windows',
        type: 'building',
        title: 'test123.123123.com',
        info: '192.168.1.103',
        folder: '/var/lib/....',
        isDeny: false,
        browserList: [{ name: 'Filefox' }, { name: 'Safari' }, { name: 'Ubuntu' }, { name: 'Chrome' }]

    }, {
        id: 2,
        class: 'ubuntu',
        type: 'building',
        title: 'test123.11111.com',
        info: '192.168.1.104',
        folder: '/var/lib/....',
        isDeny: false,
        browserList: [{ name: 'Filefox' }, { name: 'Safari' }]

    }, {
        id: 3,
        class: 'debin',
        type: 'building',
        title: 'test123.11111.com',
        info: '192.168.1.105',
        folder: '/var/lib/....',
        isDeny: false,
        browserList: [{ name: 'Filefox' }, { name: 'Safari' }]

    }, {
        id: 4,
        class: 'suse',
        type: 'idle',
        title: 'test123.11111.com',
        info: '192.168.1.107',
        folder: '/var/lib/....',
        isDeny: false,
        browserList: []

    }, {
        id: 5,
        class: 'cent_os',
        type: 'idle',
        title: 'test123.11111.com',
        info: '192.168.1.107',
        folder: '/var/lib/....',
        isDeny: true,
        browserList: [{ name: 'Filefox' }, { name: 'Safari' }, { name: 'Ubuntu' }, { name: 'Chrome' }]

    },]
};

module.exports = context;