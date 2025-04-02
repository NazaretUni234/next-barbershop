import React, { useEffect, useMemo, useState } from "react";
import {
  InputLabel,
  Stack,
  TextField,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  Alignment,
} from "ckeditor5";
import SelectImageModal from "../selectImage";
import { useNotification, useTextInput } from "@/hooks/globalHooks";
import {
  newServiceController,
  updateServiceController,
} from "@/controllers/services";
import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import { Service } from "@/types/services";
import { useDataServices } from "@/hooks/services";
import { TypeManagement } from "@/types/system";
import { Barber } from "@/types/barbers";
import {
  newBarberController,
  updateBarberController,
} from "@/controllers/barbers";
import { useDataBarbers } from "@/hooks/barbers";

const keyCkEditor =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDQ2NzUxOTksImp0aSI6IjI1NTUyY2U3LTkzZWUtNGIxZi05NTMyLTM1YWJiNGFmYmVlNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjU0YTNjNDJmIn0.kFCugMefyaGPDKrspAMEffEIkDPl0Knf-CmTWWWy_66RUu02HEiLZ_pKT_nbPhjyeRuubMBbNiWMlTTALYfWIA";

interface Props {
  children?: React.ReactNode;
  dataEditItem?: Service | Barber;
  typeManagement: TypeManagement;
}

export default function ModalCreateElementModal({
  children,
  dataEditItem,
  typeManagement,
}: Props) {
  const [open, setOpen] = useState(false); // Estado para controlar el modal
  const { clearData, data, handleChange, handleObjectPart } = useTextInput(
    typeManagement === "services"
      ? {
          name: "",
          description: "",
          image: "",
        }
      : {
          name: "",
          description: "",
          image: "",
          rol: "",
        }
  );
  const { getAllServices } = useDataServices();
  const { getBarbersSetState } = useDataBarbers();
  const { openNotification } = useNotification();

  useEffect(() => {
    if (dataEditItem) {
      if (typeManagement === "services") {
        const sendable = {
          name: (dataEditItem as Service).title,
          description: dataEditItem.description,
          image: dataEditItem.image,
        };
        handleObjectPart(sendable);
      }
      if (typeManagement === "barbers") {
        const sendable = {
          name: (dataEditItem as Barber).name,
          description: dataEditItem.description,
          image: dataEditItem.image,
          rol: (dataEditItem as Barber).rol,
        };
        handleObjectPart(sendable);
      }
    }
  }, [dataEditItem, handleObjectPart, typeManagement]);

  const { description, image, name, rol } = data;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const disabledButton = useMemo(() => {
    const validateFields =
      typeManagement === "services"
        ? !name.trim() || !description.trim() || !image.trim()
        : !name.trim() ||
          !description.trim() ||
          !image.trim() ||
          !(rol ?? "").trim();
    if (dataEditItem && !validateFields && typeManagement === "services") {
      return (
        name !== (dataEditItem as Service).title &&
        description !== dataEditItem.description &&
        image !== dataEditItem.image
      );
    }
    if (dataEditItem && !validateFields && typeManagement === "barbers") {
      return (
        name !== (dataEditItem as Barber).name &&
        description !== dataEditItem.description &&
        image !== dataEditItem.image &&
        (rol ?? "") !== (dataEditItem as Barber).rol
      );
    }
    return validateFields;
  }, [name, description, image, dataEditItem, rol, typeManagement]);

  const handleClickSendInfo = async () => {
    if (!disabledButton) {
      if (typeManagement === "services") {
        if (!dataEditItem) {
          const sendable = {
            title: name,
            description,
            image,
          };
          const res = await newServiceController(sendable);
          if (res) {
            clearData();
            handleClose();
            await getAllServices();
            openNotification("Servicio creado correctamente", "success");
          } else {
            openNotification("Error al crear el servicio", "error");
          }
        } else {
          const sendable = {
            _id: dataEditItem._id,
            title: name,
            description,
            image,
          };
          const res = await updateServiceController(sendable);
          if (res) {
            clearData();
            handleClose();
            await getAllServices();
            openNotification("Servicio editado correctamente", "success");
          } else {
            openNotification("Error al editar el servicio", "error");
          }
        }
      } else if (typeManagement === "barbers") {
        if (!dataEditItem) {
          const sendable = {
            name,
            description,
            image,
            rol: rol ?? "",
          };
          const res = await newBarberController(sendable);
          if (res) {
            clearData();
            handleClose();
            await getBarbersSetState();
            openNotification("Barbero creado correctamente", "success");
          } else {
            openNotification("Error al crear el barbero", "error");
          }
        } else {
          const sendable = {
            _id: dataEditItem._id,
            name,
            description,
            image,
            rol: rol ?? "",
          };
          const res = await updateBarberController(sendable);
          if (res) {
            clearData();
            handleClose();
            await getBarbersSetState();
            openNotification("Barbero editado correctamente", "success");
          } else {
            openNotification("Error al editar el barbero", "error");
          }
        }
      }
    } else {
      openNotification("Por favor completa todos los campos", "warning");
    }
  };

  return (
    <Stack width="100%" alignItems="center">
      {children ? (
        <Stack width="fit-content" onClick={handleOpen}>
          {children}
        </Stack>
      ) : (
        <button
          className="btn btn-light btn-radius btn-brd grd1 effect-1"
          onClick={handleOpen}
        >
          {typeManagement === "services" ? "Crear Servicio" : "Crear Barbero"}
        </button>
      )}

      {/* Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Stack width="100%" spacing={5}>
            <Stack width="100%" alignItems="center">
              <SelectImageModal
                handleChange={handleChange}
                imageSelected={data.image}
              />
            </Stack>
            <Stack>
              <InputLabel>
                <Typography sx={{ fontSize: "14px", color: "#0E2A47" }}>
                  {typeManagement === "services"
                    ? "Nombre del servicio"
                    : "Nombre del barbero"}
                </Typography>
              </InputLabel>
              <TextField
                id="name"
                value={data.name}
                onChange={(e) => handleChange("name", e.target.value)}
                inputProps={{ style: { fontSize: 14 } }}
              />
            </Stack>
            {typeManagement === "barbers" && (
              <Stack>
                <InputLabel>
                  <Typography sx={{ fontSize: "14px", color: "#0E2A47" }}>
                    Rol
                  </Typography>
                </InputLabel>
                <TextField
                  id="name"
                  value={data.rol}
                  onChange={(e) => handleChange("rol", e.target.value)}
                  inputProps={{ style: { fontSize: 14 } }}
                />
              </Stack>
            )}
            <Stack>
              <InputLabel>
                <Typography sx={{ fontSize: "14px", color: "#0E2A47" }}>
                  {typeManagement === "services"
                    ? "Descripción del servicio"
                    : "Descripción del barbero"}
                </Typography>
              </InputLabel>
              <CKEditor
                editor={ClassicEditor}
                config={{
                  licenseKey: keyCkEditor,
                  plugins: [
                    Essentials,
                    Paragraph,
                    Bold,
                    Italic,
                    Underline,
                    Strikethrough,
                    List,
                    Alignment,
                  ],
                  toolbar: [
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "|",
                    "numberedList",
                    "bulletedList",
                    "|",
                    "alignment",
                    "|",
                    "undo",
                    "redo",
                  ],
                  initialData: description || "<p>¡Escribe aquí tu texto!</p>",
                }}
                onChange={(e, editor) =>
                  handleChange("description", editor.getData())
                }
              />
            </Stack>
            <Stack alignItems="center">
              <button
                className="btn btn-light btn-radius btn-brd grd1 effect-1"
                style={{ width: "30%" }}
                disabled={disabledButton}
                onClick={handleClickSendInfo}
              >
                {dataEditItem ? "Editar Servicio" : "Crear Servicio"}
              </button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
}
