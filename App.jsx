import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="app-shell">
      <div className="theme-grid" aria-hidden="true" />
      <div className="neural-waves" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} style={{ "--i": index }} />
        ))}
      </div>
      <Outlet />
    </main>
  );
}
