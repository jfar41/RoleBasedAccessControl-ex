const rules = {
    visitor: {
        static: [
            "posts:list", //defining permissions in "resource:action" format
            "home-page:visit"
        ]
    },
    writer: {
        static: [
            "posts:list",
            "posts:create",
            "users:getSelf",
            "home-page:visit",
            "dashboard-page:visit"
            //all the above sets are permissions within an array of the users role
        ],
        dynamic: {
            "posts:edit": ({userId, postOwnerId}) => {
                if (!userId || !postOwnerId) return false;
                return userId === postOwnerId;
                //property is the name:value pair and check component in Can.js is checking if
                //dynamicPermissions object has a property with the name of the permission
                //"posts:edit" is the name
            }
        }
    },
    admin: {
        static: [
            "posts:list",
            "posts:create",
            "posts:edit",
            "posts:delete",
            "users:get",
            "users:getSelf",
            "home-page:visit",
            "dashboard-page:visit"
        ]
    }
};

export default rules;
