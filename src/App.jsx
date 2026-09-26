import React, { useState, useEffect } from "react";

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

import MultimediaVideoPage from "./pages/MultimediaVideoPage";
import SectionPage from "./pages/SectionPage";

import "./App.css";

function App() {
  const [screen, setScreen] = useState("home");

  const handleNavigation = (destination) => {
    setScreen(destination);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (screen === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [screen]);

  const renderPage = () => {

    /* =========================
       HOME PAGE
    ========================= */

    if (screen === "home") {
      return (
        <>
          <Hero setScreen={setScreen} />

          <GroupMembers />
        </>
      );
    }

    /* =========================
       GENDER ROLES
    ========================= */

    if (screen === "gender-roles") {
      return (
        <SectionPage setScreen={setScreen}>
          <GenderRoles />
        </SectionPage>
      );
    }

    /* =========================
       HISTORY
    ========================= */

    if (screen === "history") {
      return (
        <SectionPage setScreen={setScreen}>
          <History />
        </SectionPage>
      );
    }

    /* =========================
       CONTEMPORARY
    ========================= */

    if (screen === "contemporary") {
      return (
        <SectionPage setScreen={setScreen}>
          <Contemporary />
        </SectionPage>
      );
    }

    /* =========================
       ISSUES
    ========================= */

    if (screen === "issues") {
      return (
        <SectionPage setScreen={setScreen}>
          <Issues />
        </SectionPage>
      );
    }

    /* =========================
       ANALYSIS
    ========================= */

    if (screen === "analysis") {
      return (
        <SectionPage setScreen={setScreen}>
          <Analysis />
        </SectionPage>
      );
    }

    /* =========================
       MULTIMEDIA
    ========================= */

    if (screen === "multimedia") {
      return (
        <SectionPage setScreen={setScreen}>
          <Multimedia setScreen={setScreen} />
        </SectionPage>
      );
    }

    /* =========================
       MULTIMEDIA VIDEO
    ========================= */

    if (screen === "multimedia-video") {
      return (
        <MultimediaVideoPage
          setScreen={setScreen}
        />
      );
    }

    /* =========================
       REFLECTION
    ========================= */

    if (screen === "reflection") {
      return (
        <SectionPage setScreen={setScreen}>
          <Reflection />
        </SectionPage>
      );
    }

    /* =========================
       CONCLUSION
    ========================= */

    if (screen === "conclusion") {
      return (
        <SectionPage setScreen={setScreen}>
          <Conclusion />
        </SectionPage>
      );
    }

    /* =========================
       REFERENCES
    ========================= */

    if (screen === "references") {
      return (
        <SectionPage setScreen={setScreen}>
          <References />
        </SectionPage>
      );
    }

    return null;
  };

  return (
    <div className="app">

      <Navbar onNavigate={handleNavigation} />

      <main>
        {renderPage()}
      </main>

      <Footer />

    </div>
  );
}

export default App;