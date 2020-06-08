import React from "react"

// import { colors } from "../components/styles"
import styled from "styled-components"
import Button from "./Button"
import { colors } from "./styles"

const StyledEmailLink = styled.a`
  display: flex;
  flex-direction: column;
  flex: 1.5;
`

const EmailLink = ({
  isMobile,
  recipients = [],
  directRecipient,
  body = "",
  subject,
  stretch,
  style,
}) => {
  let href = `mailto:${directRecipient}?`

  if (recipients.length > 1) {
    const bccRecipients = [...recipients].join(",")
    href += `&bcc=${bccRecipients}`
  }

  href += `&subject=${subject}`
  href += `&body=${body.replace(/\n\n/g, "%0A%0A")}`


  return (
    <>
    <StyledEmailLink href={href} style={style}>
      <Button stretch={stretch}>Then press here to edit/send in mail app</Button>
      <p style={{color: colors.redPrimary, marginBottom:"0px", display: isMobile? "block" : "none"}}>May take time to open in mail on mobile</p>
    </StyledEmailLink>
    </>
  )
}

export default EmailLink
