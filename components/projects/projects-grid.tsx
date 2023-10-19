import { IProjectsGridProps } from "@/types/component-props"
import { FC, memo, useCallback } from "react"
import classes from "../../styles/projects-grid.module.css"
import { ProjectItem } from "./project-item"

export const ProjectsGrid: FC<IProjectsGridProps> = memo(({ projects }) => {

    const renderProjects = useCallback(() => projects.map((project) =>
        <ProjectItem
            key={project.slug}
            project={project} />
    ), [projects])

    return <ul className={classes.grid}>{renderProjects()}</ul>
}) 