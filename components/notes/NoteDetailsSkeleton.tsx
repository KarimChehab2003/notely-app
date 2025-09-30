function NoteDetailsSkeleton() {
    return (
        <main className="flex justify-center flex-1 py-12">
            <div className="w-[90vw] lg:w-4xl mx-auto px-2 space-y-4">
                {/* Back link placeholder */}
                <div className="flex items-center space-x-2 px-4">
                    <div className="h-5 w-5 rounded bg-gray-300 animate-pulse"></div>
                    <div className="h-5 w-32 rounded bg-gray-200 animate-pulse"></div>
                </div>

                <div className="card border border-gray-200 rounded-2xl shadow-md">
                    <div className="card-body space-y-4">
                        {/* Title */}
                        <div className="h-8 w-3/4 rounded bg-gray-300 animate-pulse"></div>

                        {/* Tags */}
                        <ul className="flex space-x-2">
                            {Array.from({ length: 3 }).map((_, idx) => (
                                <li
                                    key={idx}
                                    className="h-6 w-16 rounded-full bg-gray-200 animate-pulse"
                                ></li>
                            ))}
                        </ul>

                        {/* Date */}
                        <div className="flex items-center space-x-2">
                            <div className="h-4 w-4 rounded bg-gray-300 animate-pulse"></div>
                            <div className="h-4 w-40 rounded bg-gray-200 animate-pulse"></div>
                        </div>

                        <div className="divider my-2"></div>

                        {/* Content lines */}
                        <div className="space-y-3">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <div
                                    key={idx}
                                    className="h-4 w-full rounded bg-gray-200 animate-pulse"
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NoteDetailsSkeleton;