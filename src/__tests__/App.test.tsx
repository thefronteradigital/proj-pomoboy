import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App Component", () => {
  it("should render the app", () => {
    render(<App />);
    expect(screen.getByText("frontera")).toBeInTheDocument();
  });

  it("should display the timer display area", () => {
    render(<App />);
    const gameboy = screen.getByText(/BATTERY/i);
    expect(gameboy).toBeInTheDocument();
  });

  it("should render control buttons", () => {
    render(<App />);
    expect(screen.getByLabelText("Previous Mode")).toBeInTheDocument();
    expect(screen.getByLabelText("Next Mode")).toBeInTheDocument();
  });

  it("should have settings modal", () => {
    render(<App />);
    expect(screen.getByText(/Controls:/i)).toBeInTheDocument();
  });

  it("should render frontera link", () => {
    render(<App />);
    const link = screen.getByRole("link", { name: /frontera/i });
    expect(link).toHaveAttribute("href", "https://frontera.my.id");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("should have initial FOCUS mode", () => {
    render(<App />);
    const focusMode = screen.getByText(/POMO/i);
    expect(focusMode).toBeInTheDocument();
  });
});

