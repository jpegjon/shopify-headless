import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] xl:h-[900px] 2xl:h[1100px]">
      <Image
        src="https://cdn.shopify.com/s/files/1/0041/3951/6013/files/desert-home.jpg?v=1642318335"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <h1 className="text-7xl text-white drop-shadow-2xl">
          Think fluffy thoughts.
        </h1>
        <p className="text-white text-shadow-2xl">
          Sleep better now with our premium quality bedding, expertly crafted by
          the world’s finest artisans.
        </p>
        <button className="text-gray-100 bg-gray-800 px-10 py-4 shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Shop the look
        </button>
      </div>
    </div>
  );
}
