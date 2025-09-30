function NotesGridSkeleton() {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {Array.from({ length: 6 }).map((_, idx) => (
                <li key={idx} className="rounded-lg border border-gray-200 p-4 shadow-sm">
                    <div className="animate-pulse flex flex-col space-y-3">
                        {/* Title placeholder */}
                        <div className="h-5 w-3/4 rounded bg-gray-300"></div>

                        {/* Tags */}
                        <div className="inline-flex space-x-2">
                            <div className="h-4 w-8 rounded bg-gray-200"></div>
                            <div className="h-4 w-8 rounded bg-gray-200"></div>
                            <div className="h-4 w-8 rounded bg-gray-200"></div>
                        </div>

                        {/* Content lines */}
                        <div className="h-4 w-full rounded bg-gray-200"></div>
                        <div className="h-4 w-5/6 rounded bg-gray-200"></div>
                        <div className="h-4 w-2/3 rounded bg-gray-200"></div>

                        {/* Footer (date, tags, etc.) */}
                        <div className="h-4 w-1/3 rounded bg-gray-300 mt-4"></div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default NotesGridSkeleton;