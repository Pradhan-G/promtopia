import Nav from "@components/Nav";
import "@styles/globals.css";
export const metadata = {
  title: "promptopia",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
          <main className="app">
            <Nav />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
