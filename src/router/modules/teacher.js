export default [{
        path: '/todoList',
        name: 'todoList',
        meta: {
            title: '待办事项',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/todoList')
    },
    {
        path: '/healthGuide',
        name: 'healthGuide',
        meta: {
            title: '健康指导',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/healthGuide')
    },
    {
        path: '/healthReport',
        name: 'healthReport',
        meta: {
            title: '健康报表',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/health/healthReport')
    },
    {
        path: '/dailyExamination',
        name: 'dailyExamination',
        meta: {
            title: '每日晨检',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/health/dailyExamination')
    },
    {
        path: '/rollCall',
        name: 'rollCall',
        meta: {
            title: '班级点名',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/attendance/rollCall')
    },
    {
        path: '/healthCard',
        name: 'healthCard',
        meta: {
            title: '健康卡',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/health/healthCard')
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        meta: {
            title: '个人中心',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/userInfo')
    },
    {
        path: '/myChild',
        name: 'myChild',
        meta: {
            title: '我的孩子',
            index: 1
        },
        component: () =>
            import ('@/view/teacher/myChild')
    }
]