import {fetchOffer, fetchOffers} from "@/db/utils";

interface Params {
  offerId: string;
}

export default async function Offer({params}: {params: Params}){
  const offerData = (await fetchOffer(params.offerId))[0];
  return (
    <div>
      <h1>Offer: {params.offerId}</h1>
      {/*<p>{JSON.stringify(offerData)}</p>*/}
      <p>{offerData.car_marks.name} {offerData.car_models.name}</p>
    </div>
  );
}