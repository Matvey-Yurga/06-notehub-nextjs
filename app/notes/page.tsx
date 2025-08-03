import {fetchNotes} from '@/lib/api';
import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';
import NotesClient from './Notes.client';
export default async function NotesPage() {
    const queryClient = new QueryClient();
    const query = "";
    const page = 1;
    await queryClient.prefetchQuery({
        queryKey: ['notes', query, page],
        queryFn: () => fetchNotes(page, query),
    });
      const initialData = await fetchNotes(page, query);
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient initialData={initialData} />
        </HydrationBoundary>
    );
}

