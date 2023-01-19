import HtmlHead from "@/components/HtmlHead";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import { useState } from "react";

export default function About() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  console.log(router);
  return (
    <>
      <HtmlHead routeTitle={"About"} />
      <main>
        <NavBar />
        <p>{counter}</p>
        <button
          onClick={() => {
            setCounter((prev) => prev + 1);
          }}
        >
          +
        </button>
      </main>
    </>
  );
}
