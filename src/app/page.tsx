import {fetchOffers} from "@/db/utils";
import Image from "next/image";
import testImage from "./test.png";

export default async function Home() {
  const offers = await fetchOffers();
  return (
    <main className="space-y-4">
      {/*<Navigation/>*/}
      {/*{JSON.stringify(await fetchOffers())}*/}
      <h1>Offers</h1>
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {offers.map((offer) => (
          <a href={`/offer/${offer.offers.id}`} key={offer.offers.id} className="bg-amber-50 rounded-xl w-fit p-3 space-y-2">
            <Image src={testImage} alt="Test Image" className="rounded-xl"/>
            <h2 className="text-xl">{offer.car_marks.name} {offer.car_models.name}</h2>
            {/*<h2>{offer.offers.title}</h2>*/}
            <div className="grid grid-cols-4">
              <p>Production: {offer.offers.production_year}r</p>
              <p>Mileage: {offer.offers.mileage}km</p>
              <p>Fuel: {offer.offers.fuel_type}</p>
              <p className="font-bold">Price: {offer.offers.price}$</p>
            </div>
            <p>{offer.offers.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
