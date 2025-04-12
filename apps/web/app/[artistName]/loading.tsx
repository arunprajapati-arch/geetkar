export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse space-y-4">
                <div className="h-12 w-48 bg-gray-400 rounded"></div>
                <div className="space-y-3">
                    <div className="h-4 w-32 bg-gray-400 rounded"></div>
                    <div className="h-4 w-24 bg-gray-400 rounded"></div>
                    <div className="h-4 w-36 bg-gray-400 rounded"></div>
                </div>
            </div>
        </div>
    );
}