import MainImg from '../images/image-web-3-desktop.jpg'

function MainSection() {

    return (
        <div className="xl:grid xl:grid-cols-1 md:grid md:grid-cols-1">
            <img src={MainImg} className="m-4 "></img>
            <div className="xl:grid xl:grid-cols-2 md:grid md:grid-cols-1">
                <h1 className="text-4xl text-left font-bold m-5">The Bright Future of Web 3.0?</h1>
                <div className="grid grid-flow-row text-gray-500 m-5">
                    <p className='text-xs text-left'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hans of the people. But is it really fulfilling its promise?</p>
                    <button type='button' className='text-white bg-red-400 hover:bg-slate-900 text-sm'>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default MainSection