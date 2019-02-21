import ProjectModel from 'src/models/project.model';
import api from './config';

export async function getProjects(): Promise<ProjectModel[]> {
    const response = await api.get('/projects');
    return response.data;
}

export function getProjectById(id: string) {
    return api.get(`/projects/${id}`);
}