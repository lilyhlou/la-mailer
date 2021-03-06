/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useMemo } from "react"
import "./layout.css"
import styled from "styled-components"
import { emailIdTitleMap } from "../emails/email-builder"
import { useDeviceQueries, MobileStates, useIsClient } from "../utils"
import Modal from "./Modal"
import Preview from "./preview"
import ControlAction from "./ControlAction"
import ControlContainer from "./ControlContainer"

const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 100%;
`

const Layout = ({
  emailId,
  setEmailId,
  addEmailRecipient,
  removeEmailRecipient,
  updateEmailInputs,
  emailDirectRecipient,
  emailSubject,
  emailBody,
  emailBodyArgs = { name: "" },
  emailRecipients = [],
  modalInfo = { title: "", body: "", url: [] },
  receivers,
  args,
}) => {
  const dropdownOptions = Object.entries(
    emailIdTitleMap
  ).map(([id, title]) => ({ value: id, label: title }))

  const [mobileState, setMobileState] = useState(MobileStates.CONTROL)
  const [showModal, setShowModal] = useState(false)

  const { isMobile } = useDeviceQueries()

  // idiot shit
  const { isClient } = useIsClient()
  if (!isClient) return null

  const controlActionComponent = (
    <ControlAction
      isMobile={isMobile}
      emailDirectRecipient={emailDirectRecipient}
      emailRecipients={emailRecipients}
      emailSubject={emailSubject}
      emailBody={emailBody}
      mobileState={mobileState}
      setMobileState={setMobileState}
    />
  )

  const previewComponent = (
    <Preview
      isMobile={isMobile}
      emailBodyArgs={emailBodyArgs}
      emailDirectRecipient={emailDirectRecipient}
      emailBody={emailBody}
      emailSubject={emailSubject}
      receivers={receivers}
      emailRecipients={emailRecipients}
    />
  )

  const modalComponent = (
    <Modal
      setShowModal={setShowModal}
      isMobile={isMobile}
      modalInfo={modalInfo}
    />
  )

  const controlContainerComponent = (
    <ControlContainer
      isMobile={isMobile}
      dropdownOptions={dropdownOptions}
      setEmailId={setEmailId}
      emailId={emailId}
      args={args}
      receivers={receivers}
      emailBodyArgs={emailBodyArgs}
      updateEmailInputs={updateEmailInputs}
      addEmailRecipient={addEmailRecipient}
      removeEmailRecipient={removeEmailRecipient}
      emailRecipients={emailRecipients}
      setShowModal={setShowModal}
      controlActionComponent={controlActionComponent}
    />
  )

  if (isMobile) {
    return (
      <StyledContainer isMobile={isMobile}>
        {mobileState === MobileStates.CONTROL && controlContainerComponent}
        {mobileState === MobileStates.PREVIEW && (
          <>
            {previewComponent}
            {controlActionComponent}
          </>
        )}
        {showModal && modalComponent}
      </StyledContainer>
    )
  }

  //normal isMobile doesn't seem to work so making a different version -- a bit hacky but should do the trick
  var isMobile2 = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return (
    <StyledContainer>
      {controlContainerComponent}
      {previewComponent}
      {showModal && modalComponent}
      <h1 style={{display: isMobile2? "none" : "block", color: "white"/*"rgba(0, 0, 0, 0.4)"*/, position: "fixed", bottom: "0", right: "45px", fontSize: "66%", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"}} >Want to send individualized emails thru gmail instead? Coming soon from <a style={{color: "white"}} href="https://github.com/cvaldez98/activism-web-client">this project </a>
       | Frontend based on <a style={{color: "white"}} href="https://github.com/michaelnyu/la-mailer">this </a>
       | Backend based on <a style={{color: "white"}}href="https://github.com/alandgton/activism-mail-bot">this </a>
       | Contribute to this site <a style={{color: "white"}}href="https://github.com/nkhalsa/la-mailer">here        </a></h1>
    </StyledContainer>
  )
}
export default Layout
