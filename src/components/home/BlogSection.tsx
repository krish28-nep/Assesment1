import image1 from "../../../public/image1.png"
import image2 from "../../../public/image2.png"
import image3 from "../../../public/image3.png"

const BlogSection = () => {
    const blogPosts = [
        {
            image: image1,
            date: "November 10, 2021",
            title: "LaserNetUs Website Launch",
            excerpt: "LaserNetUs has a new brand identity and website designed by eDesign Interactive. The homepage is dynamic and eye-catching. The website aims to highlight the innovative nature of high-intensity laser technology",
        },
        {
            image: image2,
            date: "February 21, 2021",
            title: "How we helped an Orthopedic Practice increase their traffic",
            excerpt: "We are honored and excited to be working with The Orthopedic Institute of New Jersey, the largest practice in northwest New Jersey.",
        },
        {
            image: image3,
            date: "July 03, 2021",
            title: "The Increasing importance of Web Accessibility",
            excerpt: "Is your website accessible to visitors with impairments?",
        }
    ];
    return (
        <div className='flex flex-col my-18 mx-auto w-full px-5 lg:w-[1640px] space-y-8'>
            <div className="text-center mb-12 w-full">
                <h2 className="text-4xl font-bold text-neutral-800 mb-4">Blog</h2>
                <p className="text-neutral-600 max-w-2xl mx-auto">
                    Insights, thoughts, industry trends, marketing tips, eDesign news,<br />
                    nerdy stuff, it's all here.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className=" rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-neutral-100"
                    >
                        <div className="relative h-64 overflow-hidden group">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-6">
                            <p className="text-neutral-500 text-sm mb-3">{post.date}</p>
                            <h3 className="text-xl font-semibold text-neutral-800 mb-3 hover:text-(--color-primary) transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-neutral-600 text-md leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <button className="btn-primary">
                    View All
                </button>
            </div>
        </div>
    )
}

export default BlogSection
