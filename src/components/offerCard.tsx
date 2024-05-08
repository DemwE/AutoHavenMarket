'use client';
import OptimizedImage from "@/components/optimizedImage";

export default function OfferCard({offer, cdn}: { offer: any, cdn: string }) {
  return (
    <div onClick={() => location.href = `/offer/${offer.offers.id}`} key={offer.offers.id}
         className="bg-amber-50 rounded-xl w-full xl:w-[60%] p-3 space-y-2">
      <OptimizedImage src={cdn + offer.offers.main_image} alt={offer.offers.id}
                      className="w-full h-96 rounded-xl"/>
      <h2 className="text-xl">{offer.offers.title}</h2>
      {/*<h2>{offer.offers.title}</h2>*/}
      <div className="grid grid-cols-4">
        <p>Production: {offer.offers.production_year}r</p>
        <p>Mileage: {offer.offers.mileage}km</p>
        <p>Fuel: {offer.offers.fuel_type}</p>
        <p className="font-bold">Price: {offer.offers.price}$</p>
      </div>
      <p>{offer.offers.description}</p>
    </div>
  );
}