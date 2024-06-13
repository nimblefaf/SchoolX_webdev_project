import Link from "next/link";
import Catalog from "../components/Catalog";
import Banner_and_categories from "@/components/banner_and_categories";

export default function Home() {
  return (
    <div>
      <Banner_and_categories></Banner_and_categories>
      <Catalog />
    </div>
  );
}