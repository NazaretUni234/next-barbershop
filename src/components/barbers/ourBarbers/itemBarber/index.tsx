import { Barber } from "@/types/barbers";
import Image from "next/image";

interface Props {
  barber: Barber;
}

export default function ItemBarber({ barber }: Props) {
  const { description, image, name, rol } = barber;

  return (
    <div
      className="col-lg-4 col-md-4 col-sm-12 col-xs-12 wow fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.2s"
    >
      <div className="widget clearfix">
        <div
          style={{
            position: "relative",
            width: "100%", // Ajusta el ancho del contenedor
            height: "303px", // Altura fija para el contenedor
            overflow: "hidden", // Oculta las partes sobrantes de la imagen
            borderRadius: "8px", // Opcional: bordes redondeados
          }}
        >
          <Image
            layout="fill" // Hace que la imagen ocupe todo el contenedor
            src={`/images/barbers/${image}.jpeg`}
            alt="barberImage"
            className="img-responsive"
            style={{
              objectFit: "cover", // Recorta la imagen si es más grande
            }}
          />
        </div>

        <div className="widget-title">
          <h3>{name}</h3>
          <small>{rol}</small>
        </div>
        {/* end title */}
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
      {/*widget */}
    </div>
  );
}
