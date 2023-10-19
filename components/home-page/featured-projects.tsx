import { FC, memo } from "react";
import classes from '../../styles/featured-projects.module.css';
import { ProjectsGrid } from "../projects/projects-grid";
import { IFeatureProjectsProps } from "@/types/component-props";

export const FeaturedProjects: FC<IFeatureProjectsProps> = memo(({ projects }) => <section className={classes.latest}>
    <h2>Featured Projects</h2>
    <ProjectsGrid projects={projects} />
</section>
)