type Messages = typeof import("./message/es.json")
type RmMessages = typeof import("./message/rm.json")

declare interface IntlMessages extends Messages, RmMessages {}