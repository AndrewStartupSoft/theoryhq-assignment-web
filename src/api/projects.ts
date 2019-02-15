import api from './config';

export async function getProjects(): Promise<any[]> {
    const response = await api.get('/projects');
    return response.data;
}

export function getProjectById(id: string) {
    return api.get(`/projects/${id}`);
}