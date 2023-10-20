import { AllProjects } from "@/components/projects/all-projects";
import { getAllProjects } from "@/lib/project-util";
import { IAllProjectsProps } from "@/types/component-props";
import { FC, memo } from "react";
import Head from 'next/head'; 

const AllProjectsPage: FC<IAllProjectsProps> = (props) => {
    return <>
        <Head>
            <title>My Projects</title>
            <meta
                name="description"
                content="A list of all my projects"
            />
        </Head>
        <AllProjects projects={props.projects} />
    </>
}

export default memo(AllProjectsPage);

export const getStaticProps = async () => {
    const allProjects = await getAllProjects();
    return {
        props: {
            projects: allProjects
        },
        revalidate: 60
    }
}