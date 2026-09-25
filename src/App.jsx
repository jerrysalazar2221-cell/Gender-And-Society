import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import GroupMembers from "./sections/GroupMembers";
import GenderRoles from "./sections/GenderRoles";
import History from "./sections/HistoryTemp";
import Contemporary from "./sections/Contemporary";
import Issues from "./sections/Issues";
import Analysis from "./sections/Analysis";
import Multimedia from "./sections/Multimedia";
import Reflection from "./sections/Reflection";
import Conclusion from "./sections/Conclusion";
import References from "./sections/References";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <GroupMembers />

        <GenderRoles />

        <History />

        <Contemporary />

        <Issues />

        <Analysis />

        <Multimedia />

        <Reflection />

        <Conclusion />

        <References />
      </main>

      <Footer />
    </div>
  );
}

export default App;