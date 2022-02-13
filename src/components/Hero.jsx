import { Container } from ".";
import useLoaded from "../hooks/useLoaded";
import clsx from "clsx";

export default function Hero() {
  const isLoaded = useLoaded();
  return (
    <div className="flex flex-col h-[32rem] sm:h-[42rem] bg-cover bg-center bg-slate-800 bg-hero-pattern mb-6">
      <div className="flex w-full h-full items-center bg-black bg-opacity-10">
        <Container>
          <div
            className={clsx(
              "flex flex-col gap-4 max-w-xl",
              isLoaded && "fade-in-start"
            )}
          >
            <h1
              className="text-white text-4xl sm:text-5xl font-semibold tracking-wide"
              data-fade="1"
            >
              Adaptif dan Berdampak Bagi Masyarakat
            </h1>
            <h5
              className="text-gray-200 text-base sm:text-xl max-w-lg"
              data-fade="2"
            >
              Enabler ekosistem supplycain berbasis pemberdayaan kelompok usaha
              pertanian
            </h5>
          </div>
        </Container>
      </div>
    </div>
  );
}
