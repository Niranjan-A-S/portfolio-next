import { ReactNode } from "react";
import { IProject } from "../data";

export interface ILayoutProps {
    children: ReactNode;
}

export interface IProjectsGridProps {
    projects: IProject[]
}

export interface IFeatureProjectsProps extends IProjectsGridProps {
}

export interface IAllProjectsProps extends IProjectsGridProps {
}

export interface IHomePageProps extends IProjectsGridProps {
}

export interface IProjectItemProps {
    project: IProject;
}

export interface IProjectContentProps extends Omit<IProject, 'excerpt' | 'date'> {
    content: string;
}

export interface IProjectHeaderProps extends Pick<IProject, 'title' | 'image'> { }

export interface IContactParams {
    email: string | undefined;
    message: string | undefined;
    name: string | undefined;
}

export interface IContactFormProps {
    onSubmit({ email, message, name }: IContactParams): void //TODO refactor the type of the param
}
