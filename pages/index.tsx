import { Hero } from "@/components/home-page/hero";
import { FeaturedProjects } from "@/components/home-page/featured-projects";
import { FC, memo } from "react"
import { getFeaturedProjects } from "@/lib/project-util";
import { IHomePageProps } from "@/types/component-props";
import Head from 'next/head'

const HomePage: FC<IHomePageProps> = (props) => {
  return <>
    <Head>
      <title>Niranjan's Space</title>
      <meta
        name="description"
        content="A software developer passionate about building web applications"
      />
    </Head>
    <Hero />
    <FeaturedProjects projects={props?.projects} />
  </>
}

export default memo(HomePage);


export const getStaticProps = async () => {
  const featuredProjects = await getFeaturedProjects();
  return {
    props: {
      projects: featuredProjects
    },
    revalidate: 60
  }
}