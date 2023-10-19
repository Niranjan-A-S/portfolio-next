import { FC, memo, useMemo } from "react"
import ReactMarkDown from "react-markdown"
import classes from "../../../styles/project-content.module.css"
import { ProjectHeader } from "./project-header"
import { IProjectContentProps } from "@/types/component-props"

const DUMMY_PROJECT = {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2022-01-01",
    content: "# This is a sample project",
    image: "getting-started-nextjs.png"
}

export const ProjectContent: FC<IProjectContentProps> = memo(({ content, image, slug, title }) => {

    const imagePath = useMemo(() => `/images/projects/${slug}/${image}`, [image, slug])

    return <article className={classes.content}>
        <ProjectHeader title={title} image={imagePath} />
        <ReactMarkDown>{content}</ReactMarkDown>
    </article>
})