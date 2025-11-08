import React, { useState } from "react";

const Search = () => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", query);
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-orange-50">
            <h2 className="text-4xl font-bold text-red-800 mb-6">
                Recherche
            </h2>

            <form onSubmit={handleSearch} className="w-full max-w-md flex gap-3">
                <input
                    type="text"
                    placeholder="Rechercher un service, une information..."
                    className="w-full border border-red-300 rounded-lg p-3 outline-none focus:border-red-700"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-red-800 text-white rounded-lg hover:bg-red-900 transition"
                >
                    OK
                </button>
            </form>
        </section>
    );
};

export default Search;
