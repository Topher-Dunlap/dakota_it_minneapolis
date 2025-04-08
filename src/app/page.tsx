import MainHeader from "./components/MainHeader";
import Title from "./components/Title";
import CopyBody2 from "./components/CopyBody2";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import TrustedPartners from "./components/TrustedPartners";
import ContactForm from "./components/ContactForm";
import Services2 from "./components/Services2";

export default function page() {
    return (
        <div>
            <MainHeader/>
            <Title/>
            <CopyBody2/>
            {/*<CopyBody/>*/}
            {/*<Services/>*/}
            <Services2/>
            <TrustedPartners/>
            <Testimonials/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}
