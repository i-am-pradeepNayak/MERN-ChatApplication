export interface ChatMessageBase {
  incoming?: boolean;
  outgoing?: boolean;
}

export interface TextMessage extends ChatMessageBase {
  subtype?: "text";
  message?: string;
}

export interface ImageMessage extends ChatMessageBase {
  message: string;
  img: string | null | undefined;
}

export interface DocMessage extends ChatMessageBase {
  message: string;
}

export interface LinkMessage extends ChatMessageBase {
  message: string;
  preview?: string;
}

export interface ReplyMessage extends ChatMessageBase {
  message: string;
  reply: string;
}

export interface DividerMessage {
  text: string | null | undefined;
}
