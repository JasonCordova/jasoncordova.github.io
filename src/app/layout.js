import LenisScroller from "@/comps/LenisScroller";
import "./globals.css";
import Header from "@/comps/header";
import GsapController from "@/comps/gsapController";

export const metadata = {
  title: "Jason Cordova - Software Engineer Portfolio",
  description: "Jason Cordova is a Software Engineer based in New Jersey specializing in Backend Development & QA.",
};

export default function RootLayout({ children }) {


  return (
    
    <html lang="en">
      
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wla8dix.css"></link>
        <link rel="icon" href="./app/favicon.ico" sizes="any" />
      </head>

      <body>

        <LenisScroller>
        
          <GsapController></GsapController>
          <Header></Header>
          {children}

        </LenisScroller>

      </body>
      

    </html>
    
  );

}
