
function NewsSection() {

    return (
        <div className="xl:grid xl:grid-column-1 sm:hidden md:grid-cols-1 md:gap-2 bg-slate-950 grid-rows-1 m-4  text-left p-4 text-white border border-red-900 ">
            <h1 className="text-xl text-yellow-500 font-bold">New</h1>
            <div className="my-3">
                <h3 className="font-semibold pb-1.5 hover:text-yellow-400">Hydrogen VS Electric Cars</h3>
                <p className="text-xs text-gray-500 pb-1.5 ">
                    Will hydrogen-fueled cars ever catch up to EVs?
                </p>
            </div>
            <hr/>
            <div className="my-3">
                <h3 className="font-semibold pb-1.5 hover:text-yellow-400">The Downsides of AI Artistry</h3>
                <p className="text-xs text-gray-500 pb-1.5">
                    What are tge possible adverse effects of on-demand AI image generation?
                </p>
            </div>
            <hr/>
            <div className="my-3">
                <h3 className="font-semibold pb-1.5 hover:text-yellow-400">Is VS Funding Drying Up?</h3>
                <p className="text-xs text-gray-500 pb-1.5">
                    Private funding by VS firms is down 50% YOY. We take a look at what that means.
                </p>
            </div>
        </div>
    )
}

export default NewsSection