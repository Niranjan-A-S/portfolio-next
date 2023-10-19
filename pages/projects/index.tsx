import { AllProjects } from "@/components/projects/all-projects";
import { getAllProjects } from "@/lib/project-util";
import { IAllProjectsProps } from "@/types/component-props";
import { FC, memo } from "react"

const AllProjectsPage: FC<IAllProjectsProps> = (props) => {
    return <AllProjects projects={props.projects} />
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