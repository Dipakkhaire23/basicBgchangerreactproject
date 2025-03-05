import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
     <div className="fixed inset-0 bottom-0 flex justify-center px-2">
     <div className="flex flex-wrap justify-center w-full h-full gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button
            className="relative block group"
            onClick={() => setColor("red")}
          >
            <span className="absolute inset-0 bg-indigo-500 rounded-lg"></span>
            <div className="relative transition border-2 rounded-lg bg-green group-hover:-translate-x-2 group-hover:-translate-y-2">
              <div className="p-2">
                <p className="text-xl font-medium font-outerSans">Button</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
