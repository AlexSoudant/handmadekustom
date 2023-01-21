import * as React from "react";
import { Competences } from "../components/competences";
import { Contact } from "../components/contact";
import { Creations } from "../components/creations";
import { Footer } from "../components/footer";
import { Illustration } from "../components/illustation";
import { Me } from "../components/me";
import { Navbar } from "../components/navbar";
import { References } from "../components/references";
import { Rollboat } from "../components/rollboat";

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  // fontFamily: "myFontPunch",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Navbar />
      <Illustration />
      <Competences />
      <Me />
      <Creations />
      <Rollboat />
      <Contact />
      <References />
      <Footer />
    </main>
  )
}

export default IndexPage
