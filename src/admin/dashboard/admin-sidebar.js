import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { withContext } from '../../AuthContext';

class AdminSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open});
    }

    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                docked="true"
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                styles={{sidebar: {background: "#414141" }}}
            >
            </Sidebar>
        )
    }
}

export default withContext(AdminSidebar);