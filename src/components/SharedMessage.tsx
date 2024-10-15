import { useState } from "react";
import {
  Box,
  Stack,
  IconButton,
  Tabs,
  Tab,
  Typography,
  Grid,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "../store/index";
import { updateSideBarType } from "../store/slices/appSlice";
import { sharedDocs, sharedLink } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MessageTypes";

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
      >
        <IconButton
          onClick={() => dispatch(updateSideBarType({ type: "CONTACT" }))}
        >
          <CaretLeft />
        </IconButton>

        <Typography variant="subtitle2">Shared Messages</Typography>
      </Stack>
    </Box>
  );
};

const ContactBody = ({ value }) => {
  return (
    <Stack
      sx={{
        height: "100%",
        position: "relative",
        flexGrow: 1,
        overflowY: "scroll",
        backgroundColor: "#F8FAFF",
      }}
      spacing={value === 1 ? 1 : 3}
      p={3}
    >
      {(() => {
        switch (value) {
          case 0:
            return (
              <Grid container>
                {[0, 1, 2, 3, 4, 5, 6].map(() => (
                  <Grid
                    item
                    xs={4}
                    p={1}
                    sx={{
                      borderRadius: 1.5,
                      boxShadow: "0px 0px 4px 3px rgba(0, 0, 0, 0.04)",
                      backgroundColor: "#F2F2F2",
                    }}
                  >
                    <img
                      src={faker.image.nature()}
                      alt="img"
                      style={{ width: 79, height: 79 }}
                    />
                  </Grid>
                ))}
              </Grid>
            );

          case 1:
            return sharedLink.map((ele) => (
              <LinkMsg
                incoming={ele.incoming}
                preview={ele.preview}
                message={ele.message}
              />
            ));

          case 2:
            return sharedDocs.map((ele) => (
              <DocMsg incoming={ele.incoming} message={ele.message} />
            ));
          default:
            return null;
        }
      })()}
    </Stack>
  );
};

const SharedMessage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
      }}
    >
      <Stack sx={{ height: "100%" }}>
        <ContactHeader />

        <Tabs
          sx={{ pt: 2, px: 2, backgroundColor: "#F8FAFF" }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Link" />
          <Tab label="Docs" />
        </Tabs>

        <ContactBody value={value} />
      </Stack>
    </Box>
  );
};

export default SharedMessage;

// case 1:
//             return sharedLink.map(() => (
//               <Stack
//                 direction="row"
//                 alignItems="center"
//                 p={2}
//                 spacing={2}
//                 sx={{
//                   borderRadius: 1.5,
//                   boxShadow: "0px 0px 4px 3px rgba(0, 0, 0, 0.04)",
//                 }}
//               >
//                 <Stack
//                   alignItems="center"
//                   p={1}
//                   sx={{ backgroundColor: "#D9D9D9", borderRadius: 1 }}
//                 >
//                   <LinkSimple size={32} />
//                 </Stack>

//                 <Stack direction="column" flexGrow={1}>
//                   <Typography
//                     variant="body1"
//                     sx={{ fontSize: 12, fontWeight: 500 }}
//                   >
//                     https://www.figma.com/design
//                   </Typography>
//                   <Typography
//                     sx={{ color: theme.palette.primary.main }}
//                     variant="subtitle2"
//                     component={Link}
//                   >
//                     www.figma.com
//                   </Typography>
//                 </Stack>
//               </Stack>
//             ));
