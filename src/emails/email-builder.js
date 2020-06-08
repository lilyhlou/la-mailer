import ActivismMailBot from "./activism-mail-bot"
import PoliceBrutalityLa from "./police-brutality-la"
import BreonnaTaylor from "./breonna-taylor"
import JackieLacy from "./jackie-lacy"

const emailIdMap = {
  "activism-mail-bot": ActivismMailBot,
  "police-brutality-la": PoliceBrutalityLa,
  "breonna-taylor": BreonnaTaylor,
  "jackie-lacy": JackieLacy,
}

export const emailIdTitleMap = {
  "activism-mail-bot": "General US - all elected officials",
  "police-brutality-la": "Defund LAPD Template",
  "breonna-taylor": "Justice for Breonna Taylor Template",
  "jackie-lacy": "LA - Rescind Jackie Lacey Endorsement Template",
}

export function buildEmailPreview({ emailId, stringInputs }) {
  if (emailId in emailIdMap) return emailIdMap[emailId](stringInputs)

  return { body: "Cannot find Email.", subject: "cannot find email" }
}
