import { FC, memo } from "react";
import classes from "../../styles/all-projects.module.css";
import { ProjectsGrid } from "./projects-grid";
import { IAllProjectsProps } from "@/types/component-props";

export const AllProjects: FC<IAllProjectsProps> = memo(({ projects }) =>
    <section className={classes.projects}>
        <h1>All Projects</h1>
        <ProjectsGrid projects={projects} />
    </section >
)