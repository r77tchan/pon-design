import Link from "next/link";
import { assetPath } from "../utils/assetPath";
import { GoTriangleRight } from "react-icons/go";

export default function Visual() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-20 text-white md:text-center"
      style={{
        backgroundImage: `url(${assetPath("hero.jpg")})`,
      }}
    >
      <div className="mx-auto max-w-292.5 px-7.5">
        <div className="text-5xl font-black md:text-7xl">
          WEB DESIGN SPECIALIST
        </div>
        <div className="mt-5 text-xl font-medium md:text-2xl">
          お客様の夢を叶える
          <br className="block md:hidden" />
          Webサイトを制作
        </div>
        <div className="mt-12.5">
          <Link
            href="/contact"
            className="relative inline-block rounded-full border px-18 py-4 font-semibold"
          >
            CONTACT
            <GoTriangleRight className="absolute top-1/2 right-4 -translate-y-1/2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
