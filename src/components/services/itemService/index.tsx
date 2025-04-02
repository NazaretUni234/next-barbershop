import { Service } from "@/types/services";
import Image from "next/image";

interface Props {
  service: Service;
}

export default function ItemService({ service }: Props) {
  const { description, image, title } = service;

  return (
    <div className="service-wrap clearfix" style={{ width: 600 }}>
      <Image
        src={`/images/services/${image}.jpeg`}
        alt="servicesImage"
        className="img-responsive img-rounded alignleft"
        width={120}
        height={112}
      />
      <h4>{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
}
