import { Hero } from "@/components/home-page/hero";
import { FeaturedProjects } from "@/components/home-page/featured-projects";
import { FC, memo } from "react"
import { getFeaturedProjects } from "@/lib/project-util";
import { IHomePageProps } from "@/types/component-props";

const HomePage: FC<IHomePageProps> = (props) => {
  return <>
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