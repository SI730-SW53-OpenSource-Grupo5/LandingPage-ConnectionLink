import { Button } from "../Button/Button";
import './Hero.css';

export const Hero = () => {

    function handleButtonClick() {
        window.open("https://www.youtube.com/watch?v=2nI8UwO-NpM", "_blank");
    }

    function handleKnowMoreClick() {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <section id="hero" className="w-full bg-slate-300">
            <div className="py-44 sm:py-[230px] container-section font-poppins">
                <div className="relative z-30 flex flex-col items-center justify-center text-center gap-8">
                    <h1 className="text-white text-5xl sm:text-7xl font-sans font-semibold tracking-wide">
                        ConnectionLink
                    </h1>
                    <p className="text-slate-100 font-sans font-light tracking-wide text-2xl sm:text-3xl leading-normal md:leading-relaxed">
                        "Empowering Lives, Building Hope: Beneficient<br />Events that make a Difference"
                    </p>
                    <div className="flex flex-col sm:flex-row gap-7 sm:gap-10 mt-4">
                        <Button name="Our Team" onClick={handleButtonClick}/>
                        <Button name="Know More" onClick={handleKnowMoreClick}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
