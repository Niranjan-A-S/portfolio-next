import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";

const projectsDirectory = path.join(process.cwd(), 'projects');

export const getProjectData = async (fileName: string) => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(projectsDirectory, fileName);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { content, data } = matter(fileContent);
    return {
        slug,
        ...data,
        content
    }
}

export const getProjectFiles = async () => await fs.readdir(projectsDirectory)

export const getAllProjects = async () => {
    const projectFiles = await getProjectFiles()
    const allProjects = await Promise.all(projectFiles.map(async (fileName) => await getProjectData(fileName)));
    return allProjects.sort((projectA: any, projectB: any) => projectA.date! > projectB.date! ? -1 : 1) //TODO: fix this type error
}

export const getFeaturedProjects = async () => {
    const allProjects = await getAllProjects();
    return allProjects.filter((project: any) => project.isFeatured) //TODO: fix this type error
};