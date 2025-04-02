import React, { useState } from "react";
import { Stack, Modal, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useSelector } from "react-redux";
import { TypeManagement } from "@/types/system";

interface Props {
  handleChange: (key: string, value: any) => void;
  imageSelected: string;
}

export default function SelectImageModal({
  handleChange,
  imageSelected,
}: Props) {
  const servicesImages = [
    "0dr8gj",
    "4iko9l",
    "d6utjd",
    "d8iley",
    "d8ridm",
    "i8jdut",
  ];

  const barberImages = [
    "3rf5td",
    "3rt6gf",
    "3rxdg6",
    "4tyu8i",
    "e4tfd5",
    "f4re32",
  ];

  const typeManagement: TypeManagement = useSelector(
    (state: any) => state.system.managementType
  );

  const [open, setOpen] = useState(false); // Estado para controlar el modal

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelectImage = (image: string) => {
    handleChange("image", image); // Actualiza la imagen seleccionada
    handleClose(); // Cierra el modal
  };

  return (
    <Stack width="100%" alignItems="center" spacing={5}>
      {/* Botón para abrir el modal */}
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ backgroundColor: "#bb9d52" }}
      >
        Seleccionar Imagen
      </Button>

      {/* Mostrar la imagen seleccionada */}
      {imageSelected && (
        <Stack alignItems="center">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Imagen seleccionada:
          </Typography>
          <Image
            src={`/images/${typeManagement}/${imageSelected}.jpeg`}
            alt="Imagen seleccionada"
            width={300}
            height={300}
            style={{ borderRadius: "5px" }}
          />
        </Stack>
      )}

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" sx={{ mb: 3, textAlign: "center" }}>
            Selecciona una imagen
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={2}
          >
            {(typeManagement === "services"
              ? servicesImages
              : barberImages
            ).map((image) => (
              <Box
                key={image}
                sx={{
                  cursor: "pointer",
                  border: "2px solid transparent",
                  "&:hover": { borderColor: "#1976d2" },
                }}
                onClick={() => handleSelectImage(image)}
              >
                <Image
                  src={`/images/${typeManagement}/${image}.jpeg`}
                  alt={`Imagen ${image}`}
                  width={150}
                  height={150}
                  style={{ borderRadius: "5px" }}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}
