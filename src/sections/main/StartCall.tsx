import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  Stack,
  IconButton,
} from "@mui/material";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/MuiCustomComp";
import CallElement from "../../components/CallLogs/CallElement";
import { membersList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullWidth
      maxWidth="xs"
      onClose={handleClose}
    >
      <DialogTitle sx={{ marginBottom: 3 }}>Start Call</DialogTitle>
      <DialogContent>
        <Stack spacing={1.5}>
          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <IconButton>
                  <MagnifyingGlass color="#7096E6" />
                </IconButton>
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" />
            </Search>
            <IconButton>
              <XCircle />
            </IconButton>
          </Stack>
          {/* Call List */}
          {membersList.map((ele) => (
            <CallElement {...ele} key={ele.id} />
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
