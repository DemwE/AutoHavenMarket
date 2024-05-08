import {fetchOffers} from "@/db/utils";
import Image from "next/image";
import testImage from "./test.png";
import OptimizedImage from "@/components/optimizedImage";
import OfferCard from "@/components/offerCard";
import Navigation from "@/components/navbar";

export default async function Home() {
  const offers = await fetchOffers();
  return (
    <>
      <Navigation/>
      <main className="space-y-4">
        {/*{JSON.stringify(await fetchOffers())}*/}
        <h1>Offers</h1>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {offers.map((offer) => (
            <OfferCard offer={offer} cdn={process.env.STORAGE_PATH!}/>
          ))}
        </div>
      </main>
    </>
  );
}
