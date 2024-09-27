import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar component
import Header from './components/Header'; // Import Header component
import Searchbar from './components/SearchBar';
import GraphVisualization from './components/GraphVisualization';



function Home() {
    const nodes = [
        { id: 1, label: "Node 1", group: "case" },
        { id: 2, label: "Node 2", group: "judge" },
        { id: 3, label: "Node 3", group: "section" },
        { id: 4, label: "Node 4", group: "main_case" },
    ];

    const edges = [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
    ];
    return (

        <div className="font-sans antialiased">

            <div className="z-10 sticky top-0 w-full">
                <Navbar />
            </div>


            <main className="px-8 sm:px-12 pb-14 md:pb-24 max-w-3xl mx-auto flex flex-col justify-center items-center space-y-6">

                <Header />


                <Searchbar />
                <h1>Graph Visualization</h1>
                <GraphVisualization nodes={nodes} edges={edges} />


                
            </main>


            <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
                <div className="flex justify-end space-x-2">
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full text-foreground/40"
                        aria-label="Help"
                        type="button"
                        id="radix-:R5ja:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-circle-help"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                            <path d="M12 17h.01" />
                        </svg>
                    </button>
                </div>
            </footer>
            </div>
    );
}

export default Home;
