import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

//style
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={`head-text text-left ${styles["bg-threadling"]}`}></h1>
    </>
  );
}
