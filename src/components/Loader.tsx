const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">

            <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-black animate-spin" />

            <p className="text-sm font-medium tracking-wide text-gray-700">
                Loading, please wait...
            </p>
        </div>
    </div>
)
}

export default Loader
