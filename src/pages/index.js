import React, { useEffect, useState, useMemo } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { buildEmailPreview } from "../emails/email-builder"


const IndexPage = () => {
  //from React FAQ to get previous value of useState

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

  //store history of some elements:
  function historyEntry(){
    return {
      emailId: emailId,
      emailBody: emailBody,
      emailSubject: emailSubject,
      receivers: receivers
    }
  }
  const [history, setHistory] = useState( [ historyEntry() ] )

  /*//activism-mail-bot template fetchs a random version -- with these useStates, we store the previous version so we don't have to randomize on each useEffect
  const [prevSubject, setPrevSubject] = usePrevious(emailSubject)
  const [prevEmail, setPrevEmail] = usePrevious(emailBody)
  const [prevReceivers, setPrevReceivers] = usePrevious(receivers)
    //const [prevId, setPrevId] = useState("")
  //stores whether there has been any useEffect call yet after switching emailIds
  const [firstTimeThisId, setFirstTimeThisId] = useState(true)*/



  // DELETE later.
  // set defaults
  useEffect(() => {
    //setEmailId("police-brutality-la")
    setEmailId("activism-mail-bot")
  }, [])

  useEffect(() => {
    // update email states when deps change

    //add new state to history
    setHistory(history.concat([historyEntry()]))
    var prevState = history.length > 0 ? history[history.length-1] : {}
    console.log(history)

    if (emailId === "") {
      return
    }

    /*
    //save body so it doesn't re-randomize
    var oldEmailBody = emailBody
    var oldEmailSubject = emailSubject
    var oldReceivers = receivers
    var oldEmailId = oldEmailId === undefined ? "" : oldEmailId
    *
    //set oldEmailId
    if(emailId == "activism-mail-bot"){
      if(oldEmailId == "not activism-mail-bot"){
        oldEmailId = "just became activism-mail-bot"
      } else if(oldEmailId == "just became activism-mail-bot"){
        oldEmailId == "activism-mail-bot"
      }
    }*/

    //for activism-mail-bot (and any future templates that are randomized)
    function buildRandEmailPreview(){
      console.log('building random')
      //console.log([emailBodyArgs, prevState.emailId, prevState.emailSubject, prevState.emailBody, prevState.receivers])
        return buildEmailPreview({
        emailId,
        stringInputs: Object.assign({}, emailBodyArgs, {prevId: prevState.emailId, prevSubject: prevState.emailSubject, prevBody: prevState.emailBody, prevReceivers: prevState.receivers})
      })
    }

    var email = null
    //if using the randomizing template
    if(emailId == "activism-mail-bot"){
      email = buildRandEmailPreview()
    } else {
        email = buildEmailPreview({
        emailId,
        stringInputs: emailBodyArgs
      })

    }

    var setValsFromEmail = function(email){
      console.log('setValsFromEmail called with email: ' + email)
      setArgs(email.args)
      setEmailDirectRecipient(email.directRecipient)

      setModalInfo({
        title: email.modalTitle,
        body: email.modalBody,
        url: email.modalUrl,
      })

/*
      //only do the following if the email is randomly generated (i.e. if it is from github.com/alandgton/activism-mail-bot):
      if(emailId == "activism-mail-bot"){
            //don't randomize email body every update! only for the first one (and when coming from a different template)
            if(oldEmailBody != "" && (oldEmailId == "activism-mail-bot" || oldEmailId == "just became activism-mail-bot")) {
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

}*/
  //delete this if it doesn't work:
  setEmailBody(email.body)
  setEmailSubject(email.subject)
  setReceivers(email.receivers)
  console.log('emailId: ' + emailId)
  console.log('prevEmailId: ' + prevState.emailId)
  setEmailRecipients(
    email.receivers.reduce((recipients, receiver) => {
      if (receiver.autoSelect) {
        return [...recipients, receiver.email]
      }
      return recipients
    }, [])
  )
}

    if(typeof email.then === 'function') {
      //add loading screen, then update values when async return happens
      var loadingEmail = {
        title: "Loading",
        subject: "Loading",
        body: <img src='loading.gif' />,
        args: {
          name: {
            label: "Enter your name:",
            inputType: "text",
          },
        },
        directRecipient: ``,
        receivers: [],
        modalBody: `Description`,
        modalTitle: `Emailing our elected officials for specific changes`,
        modalUrl: [``]
      }
      setValsFromEmail(loadingEmail)

      email.then(function(async_email){

        //add a new history entry once the things load! otherwise, it won't be registered in time.
        setHistory(history.concat([{
          emailId: emailId, //this is not updated later by the fetch like the other fields in this object are
          emailBody: async_email.body,
          emailSubject: async_email.subject,
          receivers: async_email.receivers
        }]))
        //var prevState = history.length > 0 ? history[history.length-1] : {}

        console.log('was async email:\n email: ')
        console.log(async_email)
        //console.log('data: ')
        //console.log(async_email)
        setValsFromEmail(async_email)})
    } else {
      console.log('twas nonfunct')
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
        var bodyArgs = { ...emailBodyArgs, [argName]: value }
        setEmailBodyArgs(bodyArgs)
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
