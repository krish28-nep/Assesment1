import { Link } from "react-router-dom"
import heroSectionPhoto from "../../../public/herosectionphoto.png"
const HeroSection = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row w-full justify-between items-center gap-8'>
            <div className='flex flex-col gap-3 max-w-[570px]'>
                <h1 className="custom-drop-shadow font-bold text-4xl md:text-5xl leading-[130%]">
                    We do the work, you stay focused on your customers.
                </h1>
                <div className="leading-[150%] space-y-4 text-lg text-neutral-600">
                    <p>Awwwsome. is a digital agency passionate about storytelling, visual design, and technology. We collaborate with companies small to large around the world to help them engage their audiences and build brand awareness.</p>
                    <p>Our team can create amazing web experiences, beginning with deep market research, practical strategies, and professional execution.</p>
                </div>
                <div className="flex gap-4 items-center mt-6">
                    <Link to="/projects" className="btn-primary">Explore Projects</Link>
                    <Link to="/contact" className="btn-primary-light">Contact Us</Link>
                </div>
            </div>
            <img
                src={heroSectionPhoto}
                alt="Hero Section illustration"
                className="w-full max-w-[600px] object-contain"
            />
        </div>
    )
}

export default HeroSection
