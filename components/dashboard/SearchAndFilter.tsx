import { getAllTags } from "@/services/notesService";
import Link from "next/link";

type PageProps = {
    searchParams: Promise<{ [tag: string]: string }>;
}

async function SearchAndFilter({ searchParams }: PageProps) {
    const data = await getAllTags();
    const params = await searchParams;

    return (
        <section className="my-2 space-y-2">
            <form action="/dashboard" method="get">
                <label className="input w-full outline-none focus-within:outline-none ring-0 focus-within:ring-1 transition-shadow duration-200">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" name="q" className="grow" placeholder="Search By Title" />
                </label>
            </form>

            <div className="flex flex-col">
                <p className="text-nowrap text-sm text-gray-500 my-2">Filter by tags:</p>
                <ul className="inline-flex items-center flex-wrap space-x-1">
                    <li
                        key="All"
                        className={`badge badge-sm transition-colors duration-200 text-xs w-fit cursor-pointer ${!params.tag ? "badge-secondary" : "hover:badge-secondary"
                            }`}
                    >
                        <Link href="/dashboard">All</Link>
                    </li>
                    {
                        Array.from(data).map((tag) => (
                            <li
                                key={tag}
                                className={`badge badge-sm transition-colors duration-200 text-xs w-fit cursor-pointer ${params.tag === tag ? "badge-secondary" : "hover:badge-secondary"
                                    }`}
                            >
                                <Link href={{ pathname: "/dashboard", query: { tag } }}>
                                    {tag}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}

export default SearchAndFilter;