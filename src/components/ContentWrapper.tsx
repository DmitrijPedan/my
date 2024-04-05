import React from "react";

function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {children}
    </div>
  );
}

export default ContentWrapper;
