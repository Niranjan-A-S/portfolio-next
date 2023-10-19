import { IProjectItemProps } from "@/types/component-props"
import Image from "next/image"
import Link from "next/link"
import { FC, memo, useMemo } from "react"
import classes from "../../styles/project-item.module.css"

export const ProjectItem: FC<IProjectItemProps> = memo(({ project: { date, excerpt, image, slug, title } }) => {

    const formattedDate = useMemo(() => new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }), [date]);

    const imagePath = useMemo(() => `/images/projects/${slug}/${image}`, [image, slug]);
    const linkPath = useMemo(() => `projects/${slug}`, [slug])

    return <li className={classes.project}>
        <Link href={linkPath}>
            <div className={classes.image}>
                <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                {/* <span>
                    <a href="">Repository</a>
                </span>
                <span>
                    <a href="">Site</a>
                </span> */}
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
})


//TODO: Add props for repository and site link