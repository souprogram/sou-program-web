import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import SPLogoTransparent from '/sou-program-icon-transparent.svg';
import { HiArrowLeft } from "react-icons/hi";

export const ThankYouPage = () => {
	return (
		<section className="bg-black text-gray-200 text-center py-[9vh] relative min-h-screen font-poppins">
			<div className="opacity-5">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          className="absolute left-[24%] top-[-10%] z-20 h-[45rem] w-[45rem]"
        />
      </div>
			<div className="mx-auto flex max-w-screen-lg flex-col min-h-[82vh] px-8 sm:px-6 lg:px-8 py-36">
				<h1 className="text-4xl font-brioni">Hvala na prijavi za radionicu robotike!</h1>
				<p className="mt-8 mb-1">Uskoro ćete primiti e-mail s dodatnim informacijama i detaljima o programu.</p>
				<p>Zahvaljujemo na Vašem interesu!</p>
				<Link to="/" className="text-white mt-6">
					<Button transparent><HiArrowLeft />Nazad na početnu stranicu</Button>
				</Link>
			</div>
		</section>
	)
}
