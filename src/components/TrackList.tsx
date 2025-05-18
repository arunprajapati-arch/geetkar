export default function TrackList() {
    return (
        <div className="flex flex-col h-full border-2 border-border/40 rounded-2xl p-4 bg-card/50 backdrop-blur-sm shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-border/40">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Track List</h1>
                <div className="text-sm text-muted-foreground">10 tracks</div>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                <div className="flex flex-col gap-2 p-4">
                    {/* Example track items - replace with actual data later */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((track) => (
                        <div 
                            key={track}
                            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-md"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-md flex items-center justify-center">
                                <span className="text-primary/60 font-medium">{track}</span>
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="font-medium group-hover:text-primary transition-colors">Track {track}</span>
                                <span className="text-sm text-muted-foreground">Artist Name</span>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 rounded-full hover:bg-primary/10 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}