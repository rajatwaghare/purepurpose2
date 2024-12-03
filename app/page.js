
import localFont from "next/font/local";
import Homeheader from "./components/Homeheader";
import Homehowitworks from "./components/Homehowitworks";
import Homeleftrght from "./components/Homeleftrght";


const autography = localFont({
  src: "./fonts/Autography.woff",
  variable: "--font-autography",
  weight: "400",
});


export default function Home() {
  return (
    <>
      <Homeheader></Homeheader>
      <Homehowitworks></Homehowitworks>
      <Homeleftrght></Homeleftrght>
    </>
  );
}
