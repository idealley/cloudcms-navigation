export default {
    items: [
        {
            "title":"Child of child 1",
            "slug":"child-of-child-1",
            "type":"visible",
            "parent":{
                "id":"1",
                "title":"Child 1",
                "typeQName":"custom:menu"
            },
            "contentType":"article",
            "article":
            {
                "id":"295cbc38c10b2f6ff018",
                "title":"Article 1",
                "typeQName":"custom:article",
                "slug":"article-1"
            },
            "_doc":"3"
        },
        {
            "title":"Child of child of child 1",
            "slug":"child-of-child-of-child-1",
            "type":"visible",
            "parent":{
                "id":"3",
                "title":"Child of child 1",
                "typeQName":"custom:menu"
            },
            "contentType":"article",
            "article":
            {
                "id":"295cbc38c10b2f6ff018",
                "title":"Article 1",
                "typeQName":"custom:article",
                "slug":"article-1"
            },
            "_doc":"4"
        },
        {
            "title":"Child 1",
            "slug":"child-1",
            "type":"visible",
            "ordering":"z-a",
            "parent":{
                "id":"0",
                "title":"Main Menu",
                "typeQName":"custom:menu"
            },
            "contentType":"category",
            "category":{
                "id":"29427339f54187cc1599",
                "title":"A Category",
                "typeQName":"custom:category",
                "slug":"a-category"
            },
            "_doc":"1"
        },
        {
            "title":"Child 2",
            "slug":"child-2",
            "type":"visible",
            "parent":{
                "id":"0",
                "title":"Main Menu",
                "typeQName":"custom:menu"
            },
            "contentType":"article",
            "article":
            {
                "id":"33407feb1977ab906894",
                "title":"Article 3",
                "typeQName":"custom:article",
                "slug":"article-3"
            },
            "_doc":"2"
        }
    ],
    tree: [ 
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
            article: { 
                    id: '33407feb1977ab906894',
                    title: 'Article 3',
                    typeQName: 'custom:article',
                    slug: 'article-3' 
            },
            _doc: '2' 
        } 
    ]
}