
import localFont from "next/font/local";
import Homeheader from "./components/Homeheader";
import Homehowitworks from "./components/Homehowitworks";
import Homeleftrght from "./components/Homeleftrght";


const autography = localFont({
  src: "./fonts/Autography.woff",
  variable: "--font-autography",
  weight: "400",
});

export const metadata = {
  title: 'Welcome to Pure Purpose',
  description: 'The motive behind this entire business revolves around the accumulation of waste created by the beauty and skincare industry. Hence, my business would collaborate with beauty centric businesses and brands.',
}


export default function Home() {
  return (
    <>
      <Homeheader></Homeheader>
      <Homehowitworks></Homehowitworks>
      <Homeleftrght></Homeleftrght>
    </>
  );
}
