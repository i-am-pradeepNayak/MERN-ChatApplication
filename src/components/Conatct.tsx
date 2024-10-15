import { forwardRef, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Divider,
  IconButton,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Slide,
  DialogTitle,
} from "@mui/material";
import {
  Phone,
  VideoCamera,
  X,
  CaretRight,
  Star,
  Bell,
  Prohibit,
  Trash,
} from "phosphor-react";
import { TransitionProps } from "@mui/material/transitions";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { useDispatch } from "../store";
import { toggleSideBar, updateSideBarType } from "../store/slices/appSlice";
import { AntSwitch, CustomDialogActions } from "./MuiCustomComp";

const ContactHeader = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <Box
      sx={{
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.default,
      }}
    >
      <Stack
        sx={{ height: "100%" }}
        direction="row"
        spacing={3}
        p={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          variant="subtitle2"
          sx={{ color: theme.palette.text.primary }}
        >
          Conatct info
        </Typography>
        <IconButton onClick={() => dispatch(toggleSideBar())}>
          <X />
        </IconButton>
      </Stack>
    </Box>
  );
};

const ContactBody = ({ handleClickOpen }) => {
  const dispatch = useDispatch();
  return (
    <Stack
      sx={{
        height: "100%",
        position: "relative",
        flexGrow: 1,
        overflowY: "scroll",
      }}
      spacing={3}
      p={3}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={faker.image.avatar()} sx={{ height: 64, width: 64 }} />
        <Stack spacing={0.5}>
          <Typography variant="body1" fontWeight={600}>
            Shrena hshah
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            323231231
          </Typography>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Stack alignItems="center" spacing={1}>
          <IconButton>
            <VideoCamera size={18} />
          </IconButton>
          <Typography variant="overline">Audio</Typography>
        </Stack>

        <Stack alignItems="center" spacing={1}>
          <IconButton>
            <Phone size={18} />
          </IconButton>
          <Typography variant="overline">Voice</Typography>
        </Stack>
      </Stack>

      <Divider />

      <Stack spacing={2} direction="column">
        <Typography variant="body1">About</Typography>
        <Typography variant="body2">Hi there im using</Typography>
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2">Media,links and docs</Typography>
        <Button
          onClick={() => dispatch(updateSideBarType({ type: "SHARED" }))}
          endIcon={<CaretRight />}
        >
          401
        </Button>
      </Stack>

      <Stack direction="row" spacing={1}>
        {[1, 2, 3].map(() => (
          <Box>
            <img src={faker.image.nature()} alt="img" />
          </Box>
        ))}
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Star size={21} />
          <Typography variant="subtitle2">Starred Messages</Typography>
        </Stack>
        <IconButton
          onClick={() => dispatch(updateSideBarType({ type: "STARRED" }))}
        >
          <CaretRight />
        </IconButton>
      </Stack>

      <Divider />

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Bell size={21} />
          <Typography variant="subtitle2">Mute notifications</Typography>
        </Stack>
        <AntSwitch />
      </Stack>

      <Divider />

      <Typography> 1 group in common</Typography>

      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src={faker.image.avatar()} sx={{ height: 40, width: 40 }} />
        <Stack spacing={0.5}>
          <Typography variant="subtitle2">Shrena hshah</Typography>
          <Typography variant="caption">323231231</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Prohibit />}
          onClick={() => {
            handleClickOpen("block");
          }}
        >
          Block
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<Trash />}
          onClick={() => {
            handleClickOpen("delete");
          }}
        >
          Delete
        </Button>
      </Stack>
    </Stack>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide({ open, handleClose, getDialogText }) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{getDialogText().title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{getDialogText().content}</DialogContentText>
      </DialogContent>
      <CustomDialogActions>
        <Button onClick={handleClose}>Yes</Button>
        <Button onClick={handleClose}>No</Button>
      </CustomDialogActions>
    </Dialog>
  );
}

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [actionType, setActionType] = useState("");

  const handleClickOpen = (type) => {
    setActionType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getDialogText = () => {
    switch (actionType) {
      case "block":
        return {
          title: "Block this chat",
          content: "Are u sure u want to block this chat",
        };
      case "delete":
        return {
          title: "Delete this chat",
          content: "Are u sure u want to delete this chat",
        };
      default:
        return "";
    }
  };
  return (
    <>
      <Box
        sx={{
          width: 320,
          height: "100vh",
        }}
      >
        <Stack sx={{ height: "100%" }}>
          <ContactHeader />
          <ContactBody handleClickOpen={handleClickOpen} />
        </Stack>
      </Box>
      <AlertDialogSlide
        open={open}
        handleClose={handleClose}
        getDialogText={getDialogText}
      />
    </>
  );
};

export default Contact;
