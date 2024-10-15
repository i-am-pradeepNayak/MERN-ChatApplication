import { Box, Stack } from "@mui/material";
import { chatHistory } from "../../data";

import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MessageTypes";

function ChatSection() {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {chatHistory.map((chat) => {
          switch (chat.type) {
            case "divider":
              return <Timeline text={chat.text} />;
            case "msg":
              switch (chat.subtype) {
                case "link":
                  return (
                    <LinkMsg
                      incoming={chat.incoming}
                      preview={chat.preview}
                      message={chat.message}
                    />
                  );
                case "img":
                  return (
                    <MediaMsg
                      incoming={chat.incoming}
                      img={chat.img}
                      message={chat.message}
                    />
                  );
                case "doc":
                  return (
                    <DocMsg incoming={chat.incoming} message={chat.message} />
                  );
                case "reply":
                  return (
                    <ReplyMsg
                      incoming={chat.incoming}
                      message={chat.message}
                      reply={chat.message}
                    />
                  );
                default:
                  return (
                    <TextMsg incoming={chat.incoming} message={chat.message} />
                  );
              }
          }
        })}
      </Stack>
    </Box>
  );
}

export default ChatSection;
