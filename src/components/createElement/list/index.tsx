import { Barber } from "@/types/barbers";
import { Service } from "@/types/services";
import {
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import ModalCreateElementModal from "../modalCreateElement";
import { deleteServiceController } from "@/controllers/services";
import { useDataServices } from "@/hooks/services";
import { useNotification } from "@/hooks/globalHooks";
import { TypeManagement } from "../../../types/system";
import { useSelector } from "react-redux";
import { deleteBarberController } from "@/controllers/barbers";
import { useDataBarbers } from "@/hooks/barbers";

type Props = {
  items: (Service | Barber)[];
};

export default function ItemList({ items }: Props) {
  const { getAllServices } = useDataServices();
  const { openNotification } = useNotification();
  const { getBarbersSetState } = useDataBarbers();

  const typeManagement: TypeManagement = useSelector(
    (state: any) => state.system.managementType
  );

  const handleClickDeleteItem = async (id: string) => {
    const res =
      typeManagement === "services"
        ? await deleteServiceController(id)
        : await deleteBarberController(id);
    if (res) {
      if (typeManagement === "services") {
        await getAllServices();
      } else {
        await getBarbersSetState();
      }
      openNotification(
        `${
          typeManagement === "services" ? "servicio" : "barbero"
        } eliminado con exito`,
        "success"
      );
    } else {
      openNotification("Error al eliminar el elemento", "error");
    }
  };

  return (
    <Stack width="100%" spacing={4} alignItems="center">
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
        Lista de Elementos
      </Typography>
      <Stack width="70%" spacing={3}>
        {items.length === 0 && (
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2 }}
            textAlign="center"
          >
            No hay elementos para mostrar
          </Typography>
        )}
        {items.length > 0 &&
          items.map((item) => (
            <Card
              key={item._id}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              {/* Imagen del elemento */}
              <CardMedia
                component="img"
                image={`/images/${typeManagement}/${item.image}.jpeg`}
                alt={item.title || item.name} // Usa title si es Service, name si es Barber
                sx={{ width: 150, height: 150, objectFit: "cover" }}
              />
              {/* Contenido del elemento */}
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {item?.title || item?.name}{" "}
                  {/* Usa title si es Service, name si es Barber */}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                  fontSize={14}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                {/* {item.description} */}
                {/* </Typography> */}
                {"rol" in item && (
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    Rol: {item.rol} {/* Muestra el rol si es Barber */}
                  </Typography>
                )}
              </CardContent>
              {/* Botones de acción */}
              <CardActions>
                <ModalCreateElementModal
                  dataEditItem={item}
                  typeManagement={typeManagement}
                >
                  <Button size="small" color="primary" sx={{ fontSize: 14 }}>
                    Editar
                  </Button>
                </ModalCreateElementModal>
                <Button
                  size="small"
                  color="error"
                  sx={{ fontSize: 14 }}
                  onClick={() => handleClickDeleteItem(item._id)}
                >
                  Eliminar
                </Button>
              </CardActions>
            </Card>
          ))}
      </Stack>
    </Stack>
  );
}
