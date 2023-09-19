"use client;";

import React, { createContext, useState } from "react";

export const UserSettingsContext = createContext({});

interface UserSettingsProviderProps {
  children: React.ReactNode;
}

const UserSettingsProvider = ({ children }: UserSettingsProviderProps) => {
  const [settings, setSettings] = useState([]);

  return (
    <UserSettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsProvider;
