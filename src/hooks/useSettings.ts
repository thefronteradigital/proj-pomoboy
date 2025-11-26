import { useState, useCallback } from "react";
import type { Settings } from "@/types";
import { DEFAULT_SETTINGS } from "@/constants";

interface UseSettingsReturn {
  settings: Settings;
  updateSettings: (newSettings: Settings) => void;
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
}

/**
 * Custom hook for managing application settings
 */
export const useSettings = (): UseSettingsReturn => {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const updateSettings = useCallback((newSettings: Settings) => {
    setSettings(newSettings);
  }, []);

  const openSettings = useCallback(() => {
    setIsSettingsOpen(true);
  }, []);

  const closeSettings = useCallback(() => {
    setIsSettingsOpen(false);
  }, []);

  return {
    settings,
    updateSettings,
    isSettingsOpen,
    openSettings,
    closeSettings,
  };
};
