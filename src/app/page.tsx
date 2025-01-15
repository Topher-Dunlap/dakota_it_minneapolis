import MainHeader from "./components/MainHeader";
import WorkWithUs from "./components/WorkWithUs";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import TrustedPartners from "./components/TrustedPartners";
import ContactForm from "./components/ContactForm";

export default function page() {
    return (
        <div>
            <MainHeader/>
            <Title/>
            <WorkWithUs/>
            <TrustedPartners/>
            <Testimonials/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}
