import {useQuery} from "@tanstack/react-query";
import {axiosInstance} from "@/hooks/api/axiosInstance";


export function useFetchBibleChapter() {
    return useQuery({
        queryKey: ['get-bible-chapter'],
        queryFn: async (): Promise<BibleChapterResponse> => {
            const response = await axiosInstance.get('/1/1.json')

            return response.data
        }
    })
}
