import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import HowItWorks from "../Components/HowItWorks";
import Testimonials from "../Components/Testimonials";
import Pricing from "../Components/Pricing";
import CTA from '../Components/CTA';
import Footer from "../Components/Footer";

export default function Landing() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <CTA />
            <Footer />
        </div>
    );
}