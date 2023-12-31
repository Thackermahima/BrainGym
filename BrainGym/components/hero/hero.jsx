import Image from "next/image";
import Link from "next/link";
const hero = () => {





  return (
    <section className="relative pb-60 pt-40 md:pt-60 h-1527 ">

      {/* Background Image with Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          width={1519}
          height={760}
          src="/images/Limg.jpg"
          alt="gradient"
          className="h-full w-full object-cover"
          style={{ filter: "brightness(0.5) blur(3px)" }}

        />
      </div>

      <picture className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden dark:block">
        <Image
          width={1519}
          height={760}
          src="/images/gradient_dark.jpg"
          alt="gradient dark"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="container h-full mx-auto relative z-10">
        <div className="grid h-full items-center gap-4 md:grid-cols-4">
          {/* <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-start md:py-40 xl:col-span-4"> */}
          <div className="col-span-6 flex h-full flex-col items-center justify-center py-10 md:items-center md:py-20 xl:col-span-8">

            {/* <h1 className="text-jacarta-700 font-bold font-display mb-6 text-center text-5xl dark:text-white md:text-left lg:text-6xl xl:text-7xl">
             Unity Hub
            </h1> */}
            <h1 className="text-white  font-bold md:text-center xl: text-5xl text-center " >
              Brainstorm with experts and like minded peers of your industry.
            </h1><br></br><br></br>
            <div className="flex space-x-4">
              <Link
                href="/create"
                className="bg-white shadow-jacarta-volume hover:bg-jacarta-500 w-44 rounded-full py-3 px-8 text-center font-semibold hover:text-white text-jacarta-700 transition-all"
              >
                Start My Page
              </Link>

              <Link
                href="/collection/explore_collection"
                className=" text-white bg-jacarta-500  w-36 rounded-full hover:bg-white py-3 px-8 text-center font-semibold transition-all hover:text-jacarta-700"
              >
                Explore
              </Link>
            </div>
          </div>

          {/* <!-- Hero image --> */}
          {/* <div className="col-span-6 xl:col-span-8">
            <div className="relative text-center md:pl-8 md:text-right">
              <Image
                width={560}
                height={560}
                src="/images/hero/hero.jpg"
                alt="hero"
                className="hero-img mt-8 inline-block w-72 rotate-[8deg] sm:w-full lg:w-[24rem] xl:w-[35rem]"
              />
              <Image
                width={740}
                height={602}
                src="/images/hero/3D_elements.png"
                alt="floating image"
                className="animate-fly absolute top-0 md:-right-[10%] "
              />
            </div>
          </div> */}
        </div>
      </div>

    </section>

  );

};

export default hero;
