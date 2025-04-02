import Image from "next/image";
import Greeting from "@/components/Greeting";
import Farewell from "@/components/Farewell";

export default function Home() {
  return (
    <>
      < h1 className="" > Welcome to this beautiful website! </h1 >
      <Greeting />
      <Farewell />
    </>
  );
}
