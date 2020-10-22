import React from 'react';
import { Redirect } from "react-router-dom";

import { AuthConsumer } from "../authContext"
import Can from "../components/Can";
import Logout from "../components/Logout";
import Profile from "../components/Profile";
import PostsList from "../components/PostList";

const DashboardPage = () => (
    <AuthConsumer>
        {({user}) => (
            <Can 
            //using Can component only requires to pass the role and the perform prop to tell
            //the component what is the user role and what action they are trying to execute
            //then provide yes and no props to the component. Now component decides which props to render
            
                role={user.role}
                perform="dashboard-page:visit"
                yes={() => (
                    <div>
                        <h1>Dashboard</h1>
                        <Logout />
                        <Profile />
                        <PostsList />
                    </div>
                )}
                no={() => <Redirect to="/"/>}
            />
        )}
    </AuthConsumer>

);

export default DashboardPage;