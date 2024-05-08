import {fetchOffer} from "@/db/utils";
// import {Image} from "@nextui-org/react";
import Image from 'next/image'
import OptimizedImage from "@/components/optimizedImage";
import ModalImage from "@/components/modalImage";
import Navigation from "@/components/navbar";

interface Params {
  offerId: string;
}

export default async function Offer({params}: { params: Params }) {
  const offerData = (await fetchOffer(params.offerId))[0];
  const image = (process.env.STORAGE_PATH! + offerData.offers.main_image);

  function images() {
    try {
      return offerData.offers.images.map((image: string) => (
        <div className="relative h-96 ">
          <ModalImage src={process.env.STORAGE_PATH! + image} alt="Test Image" className="w-96 h-96"/>
        </div>
      ));
    } catch {
      return null;
    }
  }

  return (
    <>
      <Navigation/>
      <main>
        <h1>Offer: {params.offerId}</h1>
        {/*<p>{JSON.stringify(offerData)}</p>*/}
        <p>{offerData.offers.main_image != null ? offerData.offers.main_image : 'No image'}</p>
        <p>{image}</p>
        {/*<div className="relative h-[600px]">*/}
        {/*  <Image src={image} alt="Test Image" className="rounded-xl object-center object-contain" fill/>*/}
        {/*</div>*/}
        <ModalImage src={image} className={"h-96 w-[500px] rounded-xl"} alt="smoe"/>
        <p>{offerData.car_marks.name} {offerData.car_models.name}</p>
        <div className="grid grid-cols-2">
          {images()}
        </div>
      </main>
    </>
  );
}