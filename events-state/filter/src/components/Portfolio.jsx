import React from 'react';
import { projects } from './Data.jsx'
import Toolbar from './Toolbar.jsx'
import ProjectList from './ProjectList.jsx'
// import './css/main.css';


class Portfolio extends React.Component {

    state = {
        projects: projects,
        selectedFilter: "All"
    };

    handleSelectFilter = (selectedFilter) => {
        this.setState({ selectedFilter: selectedFilter });
    }


    getFilteredProjects() {
        return this.state.selectedFilter === "All"
            ? this.state.projects
            : this.state.projects.filter((project) => project.category === this.state.selectedFilter);
    }
    render() {
        const filters = ["All", "Websites", "Flayers", "Business Cards"];

        return (
            <>
                <Toolbar
                    filters={filters}
                    selected={this.state.selectedFilter}
                    onSelectFilter={this.handleSelectFilter}
                />
                <ProjectList
                    projects={this.getFilteredProjects()}
                />
            </>
        )
    }

}


export default Portfolio;

