export default [{
        path: '/borrowing',
        name: 'borrowing',
        meta: {
            title: '图书借阅',
            index: 1
        },
        component: () =>
            import ('@/view/librarian/borrowing')
    },
    {
        path: '/borrowCard/:number',
        name: 'borrowCard',
        meta: {
            title: '借阅卡信息',
            index: 2,
            rightTitle: '借阅明细',
            rightPath: 'borrowDetail'
        },
        component: () =>
            import ('@/view/librarian/borrowCard')
    },
    {
        path: '/borrowDetail',
        name: 'borrowDetail',
        meta: {
            title: '借阅明细',
            index: 3
        },
        component: () =>
            import ('@/view/librarian/borrowDetail')
    },
    {
        path: '/libraryManagement',
        name: 'libraryManagement',
        meta: {
            title: '图书管理',
            index: 1
        },
        component: () =>
            import ('@/view/librarian/libraryManagement')
    },
    {
        path: '/borrowCardSearch',
        name: 'borrowCardSearch',
        meta: {
            title: '借阅证查询',
            index: 2
        },
        component: () =>
            import ('@/view/librarian/borrowCardSearch')
    },
    {
        path: '/borrowCardSearchByClass',
        name: 'borrowCardSearchByClass',
        meta: {
            title: '借阅证查询',
            index: 3
        },
        component: () =>
            import ('@/view/librarian/borrowCardSearchByClass')
    },
    {
        path: '/bookSearch',
        name: 'bookSearch',
        meta: {
            title: '图书查询',
            index: 2
        },
        component: () =>
            import ('@/view/librarian/bookSearch')
    }
]