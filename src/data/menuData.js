export const menuData = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Contact",
        url: "/contact",
    },
    {
        title: "Blog",
        url: "/blog",
        submenu: [
            {
                title: "Blog 1",
                url: "/blog-1",
                submenu: [
                    {
                        title: "Blog 1.1",
                        url: "/blog-1-1",
                    },
                    {
                        title: "Blog 1.2",
                        url: "/blog-1-2",
                    },
                ],
            },
            {
                title: "Blog 2",
                url: "/blog-2",
            },
            {
                title: "Blog 3",
                url: "/blog-3",
            },
        ],
    },
]