import { FC, memo } from "react"
import Image from "next/image"
import classes from "../../../styles/project-header.module.css"
import { IProjectHeaderProps } from "@/types/component-props"

export const ProjectHeader: FC<IProjectHeaderProps> = memo(({ image, title }) => {
    return <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150} />
    </header>
})