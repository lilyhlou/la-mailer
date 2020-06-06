import React, { useEffect, useState, useMemo } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { buildEmailPreview } from "../emails/email-builder"

const IndexPage = () => {
  const [emailId, setEmailId] = useState("")
  const [emailBody, setEmailBody] = useState("")
  const [emailSubject, setEmailSubject] = useState("")
  const [emailDirectRecipient, setEmailDirectRecipient] = useState([])
  const [emailRecipients, setEmailRecipients] = useState([])
  const [emailBodyArgs, setEmailBodyArgs] = useState({})
  const [modalInfo, setModalInfo] = useState({ title: "", body: "", url: [] })
  // receivers is the complete list of selectable emails
  const [receivers, setReceivers] = useState([])
  const [args, setArgs] = useState({})

  // DELETE later.
  // set defaults
  useEffect(() => {
    //setEmailId("police-brutality-la")
    setEmailId("activism-mail-bot")
  }, [])

  useEffect(() => {
    // update email states when deps change
    if (emailId === "") {
      return
    }

    //save body so it doesn't re-randomize
    var oldEmailBody = emailBody
    var oldEmailSubject = emailSubject

    const email = buildEmailPreview({
      emailId,
      stringInputs: emailBodyArgs,
    })

/*
    //check if old body was non-blank. if so, preserve it in the new body (so it doesn't randomize on every update)
    if(oldEmailBody != "") {
      console.log("non-blank email body")
      console.log(oldEmailBody)
      email.body = oldEmailBody
  }*/

    var setValsFromEmail = function(email){
      setReceivers(email.receivers)
      setArgs(email.args)
      setEmailDirectRecipient(email.directRecipient)

      setModalInfo({
        title: email.modalTitle,
        body: email.modalBody,
        url: email.modalUrl,
      })
      setEmailRecipients(
        email.receivers.reduce((recipients, receiver) => {
          if (receiver.autoSelect) {
            return [...recipients, receiver.email]
          }
          return recipients
        }, [])
      )

      //don't randomize email body every update! only for the first one.
      if(oldEmailBody != "") {
        console.log("non-blank email body")
        //console.log(oldEmailBody)
        setEmailBody(oldEmailBody)
    } else {
        setEmailBody(email.body)
    }

    //same with subject -- only randomize the first time
    if(oldEmailBody != "") {
      console.log("non-blank email body")
      //console.log(oldEmailBody)
      setEmailSubject(oldEmailSubject)
  } else {
      setEmailSubject(email.subject)
  }

    }

    console.log('EMAIL : ' + email)
    //check if email is a promise.
    if(typeof email.then == 'function') {
      email.then(function(async_email){
        console.log('data: ')
        console.log(async_email)
        setValsFromEmail(async_email)})
    } else {
      setValsFromEmail(email)
    }


  }, [emailId, emailBodyArgs])

  const layoutProps = useMemo(
    () => ({
      modalInfo,
      emailId,
      setEmailId,
      emailDirectRecipient,
      emailRecipients: [...emailRecipients],
      addEmailRecipient: email => {
        setEmailRecipients(emailRecipients => [...emailRecipients, email])
      },
      removeEmailRecipient: email => {
        setEmailRecipients(emailRecipients =>
          emailRecipients.filter(e => email !== e)
        )
      },
      emailSubject,
      emailBody,
      emailBodyArgs: { ...emailBodyArgs },
      updateEmailInputs: (argName, value) => {
        setEmailBodyArgs({ ...emailBodyArgs, [argName]: value })
      },
      receivers,
      args,
    }),
    [
      emailId,
      args,
      receivers,
      emailRecipients,
      emailBody,
      emailSubject,
      emailDirectRecipient,
      emailBodyArgs,
      modalInfo,
    ]
  )

  return (
    <>
      <SEO title="Home" />
      <Layout {...layoutProps} />
    </>
  )
}

export default IndexPage
