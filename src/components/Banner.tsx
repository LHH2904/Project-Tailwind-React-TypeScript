import IconRating from "../assets/rating.png"
import IconRatingHalf from "../assets/rating-half.png"
import ImgTemp from "../assets/temp-1.jpeg"
import IconPlay from "../assets/play-button.png"

export const Banner = () => {
    return (
        <div className='md:h-[600px] h-[1000px] w-full bg-banner bg-cover bg-center bg-no-repeat relative mt-[75px]'>
            <div className='w-full h-full bg-black/40 '/>
            <div className='flex flex-col md:flex-row items-center justify-between absolute md:top-1/2 top-10 -translate-x-1/2 left-1/2 md:-translate-y-1/2 w-full'>
                <div className='md:w-[50%] w-full'>
                    <div className='flex flex-col space-y-6 items-start p-10'>
                        <p className='bg-gradient-to-r from-red-600 to-red-300 py-2 px-6'>TV Show</p>
                        <div className='flex flex-col space-y-4'>
                            <h2 className='text-white text-[40px] font-bold'>Nghe nói em thích tôi</h2>
                            <div className='flex items-center space-x-3'>
                                <img src={IconRating} alt="rating" className="h-8 w-8"/>
                                <img src={IconRating} alt="rating" className="h-8 w-8"/>
                                <img src={IconRating} alt="rating" className="h-8 w-8"/>
                                <img src={IconRating} alt="rating" className="h-8 w-8"/>
                                <img src={IconRatingHalf} alt="rating" className="h-8 w-8"/>
                            </div>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid.
                            </p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <button className='py-2 px-3 bg-black text-white border border-black font-bold'>Chi tiết
                            </button>
                            <button className='py-2 px-3 bg-red-600 text-white font-bold'>Xem phim</button>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] w-full flex items-center justify-center'>
                    <div className='w-[300px] h-[400px] relative group'>
                        <img
                            src={ImgTemp}
                            alt="temp"
                            className='w-full h-full object-cover'
                        />
                        <div
                            className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                            <img src={IconPlay}
                                 alt="play"
                                 className='w-16 h-16'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
