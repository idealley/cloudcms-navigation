export default {
    items: [
        {
            title:"Child of child 1",
            slug:"child-of-child-1",
            type:"visible",
            parent: {
                "id":"1",
                "title":"Child 1",
                "typeQName":"custom:menu"
            },
            contentType:"article",
            article: {
                id:"295cbc38c10b2f6ff018",
                title:"Article 1",
                typeQName:"custom:article",
                slug:"article-1"
            },
            _doc:"3"
        },
        {
            title:"Child of child of child 1",
            slug:"child-of-child-of-child-1",
            type:"visible",
            parent: {
                id:"3",
                title:"Child of child 1",
                typeQName:"custom:menu"
            },
            contentType:"article",
            article: {
                id:"295cbc38c10b2f6ff018",
                title:"Article 1",
                typeQName:"custom:article",
                slug:"article-1"
            },
            _doc:"4"
        },
        {
            title:"Child 1",
            slug:"child-1",
            type:"visible",
            ordering:"z-a",
            parent: {
                id:"0",
                title:"Main Menu",
                typeQName:"custom:menu"
            },
            contentType:"category",
            category:{
                id:"29427339f54187cc1599",
                title:"A Category",
                typeQName:"custom:category",
                slug:"a-category"
            },
            _doc:"1"
        },
        {
            title:"Child 2",
            slug:"child-2",
            type:"visible",
            parent:{
                "id":"0",
                "title":"Main Menu",
                "typeQName":"custom:menu"
            },
            contentType:"article",
            article:
            {
                id:"33407feb1977ab906894",
                title:"Article 3",
                typeQName:"custom:article",
                slug:"article-3"
            },
            _doc:"2"
        }
    ],
    breadcrumb: [
        { 
            imported: true,
            title: 'Child of child 1',
            slug: 'child-of-child-1',
            type: 'visible',
            parent: { 
                id: '80479cf01c833bf67465',
                ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/80479cf01c833bf67465',
                title: 'Child 1',
                qname: 'o:80479cf01c833bf67465',
                typeQName: 'custom:menu' 
            },
            contentType: 'article',
            article:    { 
                id: '295cbc38c10b2f6ff018',
                ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/295cbc38c10b2f6ff018',
                title: 'Article 1',
                qname: 'o:295cbc38c10b2f6ff018',
                typeQName: 'custom:article',
                slug: 'article-1' 
            },
            _doc: '071b924d0f81b8210820',
            _stats: { 
                'a:has_role': 1,
                'a:has_role_INCOMING': 1,
                'a:menu-association': 1,
                'a:menu-association_OUTGOING': 1,
                'a:parent-menu-association': 1,
                'a:parent-menu-association_OUTGOING': 1 
            } 
        },
        { 
            imported: true,
            title: 'Child 1',
            slug: 'child-1',
            type: 'visible',
            ordering: 'z-a',
            parent: { 
                id: 'a2a80b55c0645d1a73c2',
                ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/a2a80b55c0645d1a73c2',
                title: 'Main Menu',
                qname: 'o:a2a80b55c0645d1a73c2',
                typeQName: 'custom:menu' 
            },
            contentType: 'category',
            category:   { 
                id: '29427339f54187cc1599',
                ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/29427339f54187cc1599',
                title: 'A Category',
                qname: 'o:29427339f54187cc1599',
                typeQName: 'custom:category',
                slug: 'a-category' 
            },
            _doc: '80479cf01c833bf67465',
            _stats: { 
                'a:has_role': 1,
                'a:has_role_INCOMING': 1,
                'a:menu-association': 2,
                'a:menu-association_OUTGOING': 2,
                'a:parent-menu-association': 2,
                'a:parent-menu-association_INCOMING': 1,
                'a:parent-menu-association_OUTGOING': 1 
            } 
        },
        { 
            title: 'A Category',
            slug: 'a-category',
            body: 'This is the body of the category. I am not very inspired, so I guess this is long enough',
            imported: true,
            _doc: '29427339f54187cc1599',
            parent_doc: '80479cf01c833bf67465',
            parent: { 
                id: '80479cf01c833bf67465' 
            },
            _stats: { 
                'a:category-association': 2,
                'a:category-association_INCOMING': 2,
                'a:has_role': 1,
                'a:has_role_INCOMING': 1,
                'a:menu-association': 1,
                'a:menu-association_INCOMING': 1 
            } 
        },
        { 
            imported: true,
            title: 'Main Menu',
            slug: 'main-menu',
            root: true,
            type: 'hidden',
            _doc: 'a2a80b55c0645d1a73c2',
            _stats:{ 
                'a:has_role': 1,
                'a:has_role_INCOMING': 1,
                'a:parent-menu-association': 2,
                'a:parent-menu-association_INCOMING': 2 
            } 
        }
    ],
    menuTree: [ 
        { 
            title: 'Child 1',
            slug: 'child-1',
            type: 'visible',
            ordering: 'z-a',
            parent: { 
                    id: '0', 
                    title: 'Main Menu', 
                    typeQName: 'custom:menu' 
                },
            contentType: 'category',
            category: { 
                id: '29427339f54187cc1599',
                title: 'A Category',
                typeQName: 'custom:category',
                slug: 'a-category' 
            },
            _doc: '1',
            children: [ 
                { 
                    title: 'Child of child 1',
                    slug: 'child-of-child-1',
                    type: 'visible',
                    parent: { 
                        id: '1', 
                        title: 'Child 1', 
                        typeQName: 'custom:menu' 
                    },
                    contentType: 'article',
                    article: { 
                        id: '295cbc38c10b2f6ff018',
                        title: 'Article 1',
                        typeQName: 'custom:article',
                        slug: 'article-1' 
                    },
                    _doc: '3',
                    children: [
                        { 
                            title: 'Child of child of child 1',
                            slug: 'child-of-child-of-child-1',
                            type: 'visible',
                            parent: { 
                                id: '3', 
                                title: 'Child of child 1', 
                                typeQName: 'custom:menu' 
                            },
                            contentType: 'article',
                            article: { 
                                id: '295cbc38c10b2f6ff018',
                                title: 'Article 1',
                                typeQName: 'custom:article',
                                slug: 'article-1' 
                            },
                            _doc: '4' 
                        }
                    ] 
                } 
            ]
        },
        { 
            title: 'Child 2',
            slug: 'child-2',
            type: 'visible',
            parent: { id: '0', title: 'Main Menu', typeQName: 'custom:menu' },
            contentType: 'article',
            article:
                { 
                    id: '33407feb1977ab906894',
                    title: 'Article 3',
                    typeQName: 'custom:article',
                    slug: 'article-3' 
                },
            _doc: '2' 
        } 
    ],
    breadcrumbPath: [ 
        { 
            imported: true,
            title: 'Child of child 1',
            slug: 'child-of-child-1',
            type: 'visible',
            parent: { 
                id: '80479cf01c833bf67465',
                ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/80479cf01c833bf67465',
                title: 'Child 1',
                qname: 'o:80479cf01c833bf67465',
                typeQName: 'custom:menu' 
            },
            contentType: 'article',
            article: { 
                id: '295cbc38c10b2f6ff018',
                ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/295cbc38c10b2f6ff018',
                title: 'Article 1',
                qname: 'o:295cbc38c10b2f6ff018',
                typeQName: 'custom:article',
                slug: 'article-1' 
            },
            _doc: '071b924d0f81b8210820',
            _stats: { 'a:has_role': 1,
                'a:has_role_INCOMING': 1,
                'a:menu-association': 1,
                'a:menu-association_OUTGOING': 1,
                'a:parent-menu-association': 1,
                'a:parent-menu-association_OUTGOING': 1 
            },
            path: [ 
                { 
                    imported: true,
                    title: 'Child 1',
                    slug: 'child-1',
                    type: 'visible',
                    ordering: 'z-a',
                    parent: { 
                        id: 'a2a80b55c0645d1a73c2',
                        ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/a2a80b55c0645d1a73c2',
                        title: 'Main Menu',
                        qname: 'o:a2a80b55c0645d1a73c2',
                        typeQName: 'custom:menu' 
                    },
                    contentType: 'category',
                    category:   { 
                        id: '29427339f54187cc1599',
                        ref: 'node://18dbd4f08d5f428ba9c2/d8e520e996e0be2ab84e/cbe07f08c8d5183934cb/29427339f54187cc1599',
                        title: 'A Category',
                        qname: 'o:29427339f54187cc1599',
                        typeQName: 'custom:category',
                        slug: 'a-category' 
                    },
                    _doc: '80479cf01c833bf67465',
                    _stats: { 
                        'a:has_role': 1,
                        'a:has_role_INCOMING': 1,
                        'a:menu-association': 2,
                        'a:menu-association_OUTGOING': 2,
                        'a:parent-menu-association': 2,
                        'a:parent-menu-association_INCOMING': 1,
                        'a:parent-menu-association_OUTGOING': 1 
                    } 
                } 
            ] 
        } 
    ],
    reducedBreadcrumb: [ 
        { 
            title: 'Child 1', 
            slug: 'child-1', 
            targetSlug: 'a-category' 
        },
        { 
            title: 'Child of child 1',
            slug: 'child-of-child-1',
            targetSlug: 'article-1' 
        }
    ]
}