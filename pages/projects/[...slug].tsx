import { ProjectContent } from "@/components/projects/project-detail/project-content";
import { getAllProjects, getProjectData, getProjectFiles } from "@/lib/project-util";
import { IProjectContentProps } from "@/types/component-props";
import { GetStaticProps } from "next";
import { FC, memo } from "react"
import Head from 'next/head';

const ProjectDetailPage: FC<IProjectContentProps> = (props) => {

    return <>
        <Head>
            <title>{props?.title}</title>
            <meta
                name="description"
                content={props.title}
            />
        </Head>
        <ProjectContent content={props.content} title={props.title} image={props.image} slug={props.slug} />
    </>
}

export default memo(ProjectDetailPage);

export const getStaticProps: GetStaticProps = async (context) => {
    const fileName = `${context.params?.slug && context.params?.slug}.md` as string
    const { content, image, slug, title } = await getProjectData(fileName) as any;
    return {
        props: {
            content,
            image,
            slug,
            title
        },
        revalidate: 600
    }
}

export const getStaticPaths = async () => {
    const projectFiles = await getProjectFiles();
    const slugs = projectFiles.map((fileName) => fileName.replace(/\.md$/, ''));
    const paths = slugs.map((slug) => ({ params: { slug: [slug] } }));
    return {
        paths,
        fallback: 'blocking'
    }
}