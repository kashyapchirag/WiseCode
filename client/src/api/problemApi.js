import api from "./axios";


export const getProblems = async () => {
    const res = await api.get('/problems');
    return res.data;
}

export const getCompletionPercentage = async () => {
    const res = await api.get('/problems/completion');
    return res.data;
}

export const getProblemBySlug = async (slug) => {
    const res = await api.get(`/problems/${slug}`);
    return res.data;
}