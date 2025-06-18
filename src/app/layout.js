// import Lenis from "lenis";
import LenisScroller from "@/comps/LenisScroller";
import "./globals.css";
import Lenis from "lenis";
import Header from "@/comps/header";

// export const metadata = {
//   title: "Jason Cordova - Portfolio",
//   description: "Jason Cordova is a Software Engineer based in New Jersey specializing in Backend Development & QA.",
// };

export default function RootLayout({ children }) {


  return (
    
    <html lang="en">
      
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wla8dix.css"></link>
      </head>

      <body>

        <LenisScroller>
        
          <Header></Header>
          {children}

        </LenisScroller>

      </body>
      

    </html>
    
  );

}
