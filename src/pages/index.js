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
    var oldReceivers = receivers
    var oldEmailId = oldEmailId === undefined ? "" : oldEmailId
    //set oldEmailId
    if(emailId == "activism-mail-bot"){
      if(oldEmailId == "not activism-mail-bot"){
        oldEmailId = "just became activism-mail-bot"
      } else if(oldEmailId == "just became activism-mail-bot"){
        oldEmailId == "activism-mail-bot"
      }
    }

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
      setArgs(email.args)
      setEmailDirectRecipient(email.directRecipient)

      setModalInfo({
        title: email.modalTitle,
        body: email.modalBody,
        url: email.modalUrl,
      })


      //only do the following if the email is randomly generated (i.e. if it is from github.com/alandgton/activism-mail-bot):
      if(emailId == "activism-mail-bot"){
            //don't randomize email body every update! only for the first one (and when coming from a different template)
            if(oldEmailBody != "" && (oldEmailId in ["activism-mail-bot", "just became activism-mail-bot"])) {
              console.log("old id was same")
              //replace the name though
              //if oldName is current name minus last character (unless current name is undefined or "")
              var oldName = (emailBodyArgs.name === undefined || emailBodyArgs.name == "") ? "" : emailBodyArgs.name.substring(0, emailBodyArgs.name.length-1)

              //find last ",\n" line of email which should have the name after it:
              var idxToReplaceFrom = oldEmailBody.lastIndexOf(",\n\n") //Math.max(oldEmailBody.lastIndexOf(",\r"), oldEmailBody.lastIndexOf(",\n"))
              var renamed = oldEmailBody.substring(0, idxToReplaceFrom) + ",\n\n" + emailBodyArgs.name
              setEmailBody(renamed)
              //setEmailBody(oldEmailBody.replace(",\n[YOUR NAME HERE]", emailBodyArgs.name).replace(",\n*", emailBodyArgs.name))
              //oldName = emailBodyArgs.name
            } else {
                if(emailBodyArgs.name === undefined || emailBodyArgs.name == ""){
                  setEmailBody(email.body)
                } else {
                  setEmailBody(email.body.replace("[YOUR NAME HERE]", "MY NAME"))//emailBodyArgs.name))
                }
            }

            //same with subject -- only randomize the first time
            if(oldEmailBody != "" || oldEmailId != "activism-mail-bot") {
              setEmailSubject(oldEmailSubject)
          } else {
              setEmailSubject(email.subject)
          }

          //same with receivers (recievers are now randomized in activism-mail-bot.js)
          if(oldReceivers === undefined || oldReceivers.length == 0 || oldEmailId != "activism-mail-bot"){
            setReceivers(email.receivers)
            setEmailRecipients(
              email.receivers.reduce((recipients, receiver) => {
                if (receiver.autoSelect) {
                  return [...recipients, receiver.email]
                }
                return recipients
              }, [])
            )
          } else {
            setReceivers(oldReceivers)
            setEmailRecipients(
              oldReceivers.reduce((recipients, receiver) => {
                if (receiver.autoSelect) {
                  return [...recipients, receiver.email]
                }
                return recipients
              }, [])
            )
        }
} else {
  console.log("oldEmailId not the same")
  oldEmailId = "not activism-mail-bot"
  console.log(oldEmailId)
  setEmailBody(email.body)
  setEmailSubject(email.subject)
  setReceivers(email.receivers)
  setEmailRecipients(
    email.receivers.reduce((recipients, receiver) => {
      if (receiver.autoSelect) {
        return [...recipients, receiver.email]
      }
      return recipients
    }, [])
  )

}

}

    //check if email is randomly generated (only true for activism mail bot)
    if(emailId == "activism-mail-bot") {

      email.then(function(async_email){
        //console.log('data: ')
        //console.log(async_email)
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
