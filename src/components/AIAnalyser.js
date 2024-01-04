import React, { useState } from "react";
import { SummaryCard } from "./SummaryCard";
import { ResourceCard } from "./ResourceCard";
import { ReportChat } from "./ReportChat";

export const AIAnalyser = () => {
  const [activeSection, setActiveSection] = useState("chat");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "summary":
        return <SummaryCard />;
      case "chat":
        return <ReportChat />;
      case "resources":
        return <ResourceCard />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full flex flex-col p-6">
      {/* Main body */}
      <div className="flex justify-center items-center mx-52 text-gray-900">
        <button
          className={`hover:bg-indigo-300 bg-white shadow-md font-semibold focus:bg-indigo-300 h-full w-full px-3 py-3 rounded-tl-lg rounded-bl-lg ${
            activeSection === "summary" ? "bg-indigo-300" : ""
          }`}
          onClick={() => setActiveSection("summary")}
        >
          Summary
        </button>
        <button
          className={`hover:bg-indigo-300 bg-white shadow-md font-semibold mx-0.5 focus:bg-indigo-300 h-full w-full px-3 py-3 ${
            activeSection === "chat" ? "bg-indigo-300" : ""
          }`}
          onClick={() => setActiveSection("chat")}
        >
          Chat
        </button>
        <button
          className={`hover:bg-indigo-300 bg-white shadow-md font-semibold focus:bg-indigo-300 h-full w-full px-3 py-3 rounded-tr-lg rounded-br-lg ${
            activeSection === "resources" ? "bg-indigo-300" : ""
          }`}
          onClick={() => setActiveSection("resources")}
        >
          Resources and Tips
        </button>
      </div>
      <div className="mx-auto mt-8">{renderActiveSection()}</div>
    </div>
  );
};
