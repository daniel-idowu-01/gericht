import data from "./Data";
import { AiOutlineArrowRight } from  'react-icons/ai'

function BlogComp() {

    return (
        <div className="bg-black h-full">
            <p className="text-4xl text-goldcolor text-center">Blog</p>
                { data.posts.map(post => (
                    <div
                        key={post.id}
                        className='p-5 mt-10 border mx-5 md:mx-40'
                    > 
                        <h2 className="text-goldcolor text-2xl text-center mb-5">
                            {post.title}
                        </h2>
                        <img
                            src={post.imgSrc}
                            alt=''
                            className='object-cover w-full mb-5 h-96'
                        />
                        <p className="text-white w-fit md:p-5 mb-5">
                            {post.content}
                        </p>
                        <div className="flex justify-between">
                            <p className="text-white opacity-50 text-sm">By {post.author} </p>
                            <p className="text-white opacity-50 text-sm cursor-pointer hover:opacity-100">
                                See more <AiOutlineArrowRight className="inline-block" /> </p>
                        </div>
                    </div> 
                    ))
                }
        </div>
    )
}

export default BlogComp;