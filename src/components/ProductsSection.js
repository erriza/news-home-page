import retroPC from '../images/image-retro-pcs.jpg'
import gaming from '../images/image-gaming-growth.jpg'
import laptop from '../images/image-top-laptops.jpg'

function ProductsFunction() {
    return (
        <div className='xl:flex xl:flex-row xl:justify-between xl:my-9 md:grid md:grid-cols-1'>
            <div className='flex flex-column'>
                <div>
                    <img src={retroPC} alt='retro pc'/>
                </div>
                <div className='text-left p-4'>
                    <h2 className='text-3xl font-semibold text-gray-500'>01</h2>
                    <h3 className='font-bold hover:text-red-400 cursor-pointer'>Reviving Retro PCs</h3>
                    <p className='text-sm text-gray-500'>What happens when old PCs are given modern</p>
                </div>
            </div>
            <div className='flex flex-column'>
                <div>
                    <img src={laptop} alt='retro pc'/>
                </div>
                <div className='text-left p-4'>
                    <h2 className='text-3xl font-semibold text-gray-500'>02</h2>
                    <h3 className='font-bold hover:text-red-400 cursor-pointer'>Top 10 Laptops of 2023</h3>
                    <p className='text-sm text-gray-500'>Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className='flex flex-column'>
                <div>
                    <img src={gaming} alt='retro pc'/>
                </div>
                <div className='text-left p-4'>
                    <h2 className='text-3xl font-semibold text-gray-500'>03</h2>
                    <h3 className='font-bold hover:text-red-400 cursor-pointer'>The Growth of Gaming</h3>
                    <p className='text-sm text-gray-500'>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsFunction