function buildEmail({ name }) {
  var fetched_subject = "nothing here"
  var fetched_body = "nor here"
  return fetch("/p/genmsg/" + `${
      name || "yournamehere"
    }`/*, {
    headers:{
        "accepts":"text/html"
    }
}*/).then(response => response.text())
  .then(function(data){
    //perhaps this is hacky but it's easy to just separate subject and message by a character
    var splitAt = ";"
    var splitted = data.split(splitAt)
    fetched_subject = splitted[0]
    fetched_body = splitted[1]
  }).then(function(){
    var ret_val = {
      title: "Auto generated",
      subject: fetched_subject,
      body: fetched_body + "test -- here would be a call to messages.py/gensubject" + `${
          name || "[YOUR NAME HERE]"
        }`,
      args: {
        name: {
          label: "Your name",
          inputType: "text",
        },
      },
      directRecipient: `clerk.budgetandfinancecommittee@lacity.org`,
      receivers: [
        {
          label: "CD1",
          name: "Gil Dedillo",
          email: "councilmember.cedillo@la.org",
          autoSelect: true,
        },
        {
          label: "CD2",
          name: "Paul Krekorian",
          email: "councilmember.Krekorian@lacity.org",

          autoSelect: true,
        },
        {
          label: "CD3",
          name: "Bob Blumenfield",
          email: "councilmember.blumenfield@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD4",
          name: "David Ryu",
          email: "david.ryu@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD5",
          name: "Paul Koretz",
          email: "paul.koretz@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD6",
          name: "Nuny Martinez",
          email: "councilmember.martinez@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD7",
          name: "Monica Rodriguez",
          email: "councilmember.rodriguez@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD8",
          name: "Marcqueece Harris-Dawson",
          email: "councilmember.harris-dawson@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD9",
          name: "Curren Price",
          email: "councilmember.price@lacity.org",
          autoSelect: true,
        },

        {
          label: "CD10",
          name: "Herb Wesson",
          email: "councilmember.wesson@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD11",
          name: "Mike Bonin ",
          email: "councilmember.bonin@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD12",
          name: "John Lee",
          email: "councilmember.Lee@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD13",
          name: "Mitch O’Farrell",
          email: "councilmember.ofarrell@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD14",
          name: "Jose Huizar (suspended)",
          email: "councilmember.huizar@lacity.org",
          autoSelect: true,
        },
        {
          label: "CD15",
          name: "Joe Buscaino ",
          email: "councilmember.buscaino@lacity.org",
          autoSelect: true,
        },
      ],
      modalBody: `Mayor Garcetti has chosen to increase LAPD funding, at a time when Angelenos have made clear this does not align with their priorities and concerns. The City’s unemployment rate continues to rise — reaching around 55% in early May, and nationally the highest rate since the Great Depression. Many of its approximately 2 million renters are struggling to pay rent. 58,000 of our unhoused comrades remain on the streets, despite clear evidence that failing to house them is the equivalent of sentencing them to death. \n\nThe mayor has failed to commandeer hotel rooms, despite 100,000 rooms sitting vacant, many that were overwhelmingly built with public money or on public land. Incarcerated folx are not being released, though the risk of contracting COVID-19 is greater in congregate and institutionalized living settings. Garcetti has chosen to ignore these pressing concerns, furlough 16,000 non-police municipal workers, cut funding to services, and funnel more (and unnecessary) money towards the police department AS CRIME RATES HAVE DROPPED.`,
      modalTitle: `Email councilmembers to defund LAPD`,
      modalUrl: [
        `https://docs.google.com/document/u/1/d/1qbq7YfJs102qJbGwGO1-wFa0diG16LdGYqiOoQ-hRAI/mobilebasic`,
      ],
    }

    console.log(ret_val)
    return ret_val
  })
  .catch(error => console.log("Error: ", error))

}

export default buildEmail
