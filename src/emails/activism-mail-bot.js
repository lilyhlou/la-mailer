function buildEmail({ name }) {
  var fetched_subject = "nothing here"
  var fetched_body = "nor here"

  //function return n random elements from the array (from Bergi's answer on https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array)
  function get_random_n_elements(n,arr) {
    var retval = new Array(n)
    var len = arr.length
    var taken = new Array(len)
    if(n > len){
      throw new RangeErr("more elements chosen than exist")
    }

    while(n--){
      //copy an element from arr to retval
      var copyIdx = Math.floor(Math.random() * len)
      retval[n] = arr[copyIdx in taken ? taken[copyIdx] : copyIdx]
      taken[copyIdx] = --len in taken ? taken[len] : len
    }

    return retval
  }

  return fetch("/p/genmsg"/*, {
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
      body: fetched_body + `\n${
          name || "[YOUR NAME HERE]"
        }`,
      args: {
        name: {
          label: "Enter your name:",
          inputType: "text",
        },
      },
      directRecipient: ``,
      receivers: get_random_n_elements(3, [
        {
        	label: "Phoenix",
        	name: "Mayor Kate Gallego",
        	email: "mayor.gallego@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Vice Mayor Betty Guardado",
        	email: "council.district.5@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Councilmember Thelda Williams",
        	email: "council.district.1@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Councilman Jim Waring",
        	email: "council.district.2@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Councilmember Debra Stark",
        	email: "council.district.3@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Councilmember Laura Pastor",
        	email: "council.district.4@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Councilmember Sal DiCiccio",
        	email: "council.district.6@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Councilmember Michael Nowakowski",
        	email: "council.district.7@phoenix.gov",
        },
        {
        	label: "Phoenix",
        	name: "Councilmember Carlos Garcia",
        	email: "council.district.8@phoenix.gov",
        },
        {
        	label: "Tuscon",
        	name: "Mayor Regina Romero",
        	email: "Mayor.Romero@tucsonaz.gov",
        },
        {
        	label: "Tuscon",
        	name: "Vice Mayor Steve Kozachik",
        	email: "ward6@tucsonaz.gov",
        },
        {
        	label: "Tuscon",
        	name: "Councilmember Lane Santa Cruz",
        	email: "ward1@tucsonaz.gov",
        },
        {
        	label: "Tuscon",
        	name: "Councilmember Paul Cunningham",
        	email: "ward2@tucsonaz.gov",
        },
        {
        	label: "Tuscon",
        	name: "Councilmember Paul Durham",
        	email: "ward3@tucsonaz.gov",
        },
        {
        	label: "Tuscon",
        	name: "Councilmember Nikki Lee",
        	email: "ward4@tucsonaz.gov",
        },
        {
        	label: "Tuscon",
        	name: "Councilmember Richard Fimbres",
        	email: "ward5@tucsonaz.gov",
        },
        {
        	label: "Alameda",
        	name: "Mayor Marilyn Ezzy Ashcraft",
        	email: "mezzyashcraft@alamedaca.gov",
        },
        {
        	label: "Alameda",
        	name: "Vice Mayor John Knox White",
        	email: "jknoxwhite@alamedaca.gov",
        },
        {
        	label: "Alameda",
        	name: "Councilmember Tony Daysog",
        	email: "tdaysog@alamedaca.gov",
        },
        {
        	label: "Alameda",
        	name: "Councilmember Jim Oddie",
        	email: "joddie@alamedaca.gov",
        },
        {
        	label: "Alameda",
        	name: "Councilmember Malia Vella",
        	email: "mvella@alamedaca.gov",
        },
        {
        	label: "Alameda",
        	name: "District Attorney Nancy E. O’Malley",
        	email: "info@alcoda.org",
        },
        {
        	label: "Bakersfield",
        	name: "Mayor Karen Goh",
        	email: "Mayor@bakersfieldcity.us",
        },
        {
        	label: "Bakersfield",
        	name: "Councilmembers",
        	email: "City_Council@bakersfieldcity.us",
        },
        {
        	label: "Fresno",
        	name: "Mayor Lee Brand",
        	email: "lee.brand@fresno.gov",
        },
        {
        	label: "Fresno",
        	name: "Councilmember Esmeralda Soria",
        	email: "esmeralda.soria@fresno.gov",
        },
        {
        	label: "Fresno",
        	name: "Councilmember Miguel Arias",
        	email: "miguel.arias@fresno.gov",
        },
        {
        	label: "Fresno",
        	name: "Councilmember Paul Caprioglio",
        	email: "paul.capriogolio@fresno.gov",
        },
        {
        	label: "Fresno",
        	name: "Councilmember Luis Chavez",
        	email: "luis.chavez@fresno.gov",
        },
        {
        	label: "Fresno",
        	name: "Councilmember Garry Bredefeld",
        	email: "garry.bredefeld@fresno.gov",
        },
        {
        	label: "Fresno",
        	name: "Councilmember Nelson Esparza",
        	email: "nelson.esparza@fresno.gov",
        },
        {
        	label: "Fresno",
        	name: "City Manager Wilma Quan",
        	email: "wilma.quan@fresno.gov",
        },
        {
        	label: "LA",
        	name: "Mayor Eric Garcetti",
        	email: "mayor.helpdesk@lacity.org",
        },
        {
        	label: "LA",
        	name: "City Attorney Mike Feuer",
        	email: "mayor.garcetti@lacity.org",
        },
        {
        	label: "LA",
        	name: "Councilmember Nury Martinez",
        	email: "councilmember.martinez@lacity.org",
        },
        {
        	label: "LA",
        	name: "Councilmember Gil Cedillo",
        	email: "councilmember.cedillo@lacity.org",
        },
        {
        	label: "LA",
        	name: "Councilmember Paul Krekorian",
        	email: "councilmember.Krekorian@lacity.org",
        },
        {
        	label: "LA",
        	name: "Councilmember Bob Blumenfield",
        	email: "councilmember.blumenfield@lacity.org",
        },
        {
        	label: "LA",
        	name: "Councilmember David E. Ryu",
        	email: "david.ryu@lacity.org",
        },
        {
        	label: "LA",
        	name: "LA Board of Police Commissioners",
        	email: "policecommission@lapd.online",
        },
        {
        	label: "Oakland",
        	name: "Mayor Libby Schaaf",
        	email: "officeofthemayor@oaklandnet.com",
        },
        {
        	label: "Oakland",
        	name: "Ethics Commission",
        	email: "ethicscommission@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Dan Kalb",
        	email: "dkalb@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Rebecca Kaplan",
        	email: "rkaplan@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Nikki Fortunato Bas",
        	email: "nfbas@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Lynette Gibson McElhaney",
        	email: "LMcElhaney@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Sheng Thao",
        	email: "district4@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Loren Taylor",
        	email: "District6@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Noel Gallo",
        	email: "Ngallo@oaklandca.gov",
        },
        {
        	label: "Oakland",
        	name: "Councilmember Larry Reid",
        	email: "lreid@oaklandnet.com",
        },
        {
        	label: "OC",
        	name: "Supervisor Michelle Steel",
        	email: "Michelle.Steel@ocgov.com",
        },
        {
        	label: "OC",
        	name: "Supervisor Andrew Do",
        	email: "Andrew.Do@ocgov.com",
        },
        {
        	label: "OC",
        	name: "Supervisor Donald P. Wagner",
        	email: "Donald.Wagner@ocgov.com",
        },
        {
        	label: "OC",
        	name: "Supervisor Doug Chaffee",
        	email: "Fourth.District@ocgov.com",
        },
        {
        	label: "OC",
        	name: "Supervisor Lisa Bartlett",
        	email: "Lisa.Bartlett@ocgov.com",
        },
        {
        	label: "OC",
        	name: "Todd Spitzer",
        	email: "media@da.ocgov.com",
        },
        {
        	label: "Sacramento",
        	name: "Mayor Darrell Steinberg",
        	email: "MayorSteinberg@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Vice Mayor Jeff Harris",
        	email: "jsharris@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "David Gonsalves",
        	email: "dgonsalves@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Jocelyn Navarro",
        	email: "jonavarro@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Councilmember Angelique Ashby",
        	email: "aashby@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Councilmember Allen Wayne Warren",
        	email: "awarren@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Councilmember Steve Hansen",
        	email: "SHansen@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Councilmember Jay Schenirer",
        	email: "jschenirer@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Councilmember Rick Jennings",
        	email: "rjennings@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Councilmember Larry Carr",
        	email: "lcarr@cityofsacramento.org",
        },
        {
        	label: "Sacramento",
        	name: "Supervisor Phil Serna",
        	email: "SupervisorSerna@saccounty.net",
        },
        {
        	label: "Sacramento",
        	name: "Supervisor Patrick Kennedy",
        	email: "SupervisorKennedy@saccounty.net",
        },
        {
        	label: "West Sacramento",
        	name: "Mayor Cabaldon",
        	email: "christopherc@cityofwestsacramento.org",
        },
        {
        	label: "West Sacramento",
        	name: "Councilmember Quirina Orozco",
        	email: "quirinao@cityofwestsacramento.org",
        },
        {
        	label: "West Sacramento",
        	name: "Councilmember Chris Ledesma",
        	email: "chrisl@cityofwestsacramento.org",
        },
        {
        	label: "West Sacramento",
        	name: "Councilmember Martha Guerrero",
        	email: "mguerrero@cityofwestsacramento.org",
        },
        {
        	label: "West Sacramento",
        	name: "Mayor Pro Tem Beverly Sandeen",
        	email: "beverlys@cityofwestsacramento.org",
        },
        {
        	label: "San Diego",
        	name: "Mayor Kevin Faulconer",
        	email: "kevinfaulconer@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Council President Barbara Bry",
        	email: "barbarabry@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Jennifer Campbell",
        	email: "jennifercampbell@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Chris Ward",
        	email: "christopherward@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Monica Montgomery",
        	email: "monicamontgomery@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Mark Kersey",
        	email: "markkersey@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Chris Cate",
        	email: "chriscate@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Scott Sherman",
        	email: "scottsherman@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Vivian Moreno",
        	email: "vivianmoreno@sandiego.gov",
        },
        {
        	label: "San Diego",
        	name: "Councilmember Georgette Gomez",
        	email: "georgettegomez@sandiego.gov",
        },
        {
        	label: "SF",
        	name: "Mayor London N. Breed",
        	email: "MayorLondonBreed@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Matt Haney",
        	email: "Matt.Haney@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Rafael Mandelman",
        	email: "MandelmanStaff@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Gordon Mar",
        	email: "Gordon.Mar@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Aaron Peskin",
        	email: "Aaron.Peskin@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Dean Preston",
        	email: "Dean.Preston@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Sandra Lee Fewer",
        	email: "sandra.fewer@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Hillary Ronen",
        	email: "Hillary.Ronen@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Ahsha Safai",
        	email: "Ahsha.Safai@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Catherine Stefani",
        	email: "Catherine.Stefani@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Shamann Walton",
        	email: "Shamann.Walton@sfgov.org",
        },
        {
        	label: "SF",
        	name: "Supervisor Norman Yee",
        	email: "Norman.Yee@sfgov.org",
        },
        {
        	label: "SF",
        	name: "San Francisco Police Commission",
        	email: "sfpd.commission@sfgov.org",
        },
        {
        	label: "San Jose",
        	name: "Mayor Sam Liccardo",
        	email: "mayoremail@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Vice Mayor Charles Jones",
        	email: "District1@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Sergio Jimenez",
        	email: "District2@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Raul Peralez",
        	email: "District3@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Lan Diep",
        	email: "District4@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Magdalena Carrasco",
        	email: "District5@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Devora Davis",
        	email: "District6@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Maya Esparza",
        	email: "District7@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Sylvia Arenas",
        	email: "District8@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Pam Foley",
        	email: "District9@sanjoseca.gov",
        },
        {
        	label: "San Jose",
        	name: "Councilmember Johnny Khamis",
        	email: "District10@sanjoseca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "Mayor Lisa Gillmore",
        	email: "lgillmor@santaclaraca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "Vice Mayor Karen Hardy",
        	email: "khardy@santaclaraca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "Councilmember Kathy Watanabe",
        	email: "kwatanabe@santaclaraca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "Councilmember Raj Chahal",
        	email: "rchahal@santaclaraca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "Councilmember Teresa O'Neill",
        	email: "toneill@santaclaraca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "Councilmember Karen Hardy",
        	email: "khardy@santaclaraca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "Councilmember Debbie Davis",
        	email: "ddavis@santaclaraca.gov",
        },
        {
        	label: "Santa Clara",
        	name: "City Attorney Brian Doyle",
        	email: "CityAttorney@santaclaraca.gov",
        },
        {
        	label: "Santa Clara County",
        	name: "Supervisor Mike Wasserman",
        	email: "mike.wasserman@bos.sccgov.org",
        },
        {
        	label: "Santa Clara County",
        	name: "Supervisor Cindy Chavez",
        	email: "cindy.chavez@bos.sccgov.org",
        },
        {
        	label: "Santa Clara County",
        	name: "Supervisor Dave Cortese",
        	email: "dave.cortese@bos.sccgov.org",
        },
        {
        	label: "Santa Clara County",
        	name: "Supervisor Susan Ellenberg",
        	email: "supervisor.ellenberg@bos.sccgov.org",
        },
        {
        	label: "Santa Clara County",
        	name: "Supervisor Joe Simitian",
        	email: "supervisor.simitian@bos.sccgov.org",
        },
        {
        	label: "Santa Clara County",
        	name: "District Attorney Jeffrey Rosen",
        	email: "jrosen@dao.sccgov.org",
        },
        {
        	label: "Santa Clara County",
        	name: "County Sheriff Laurie Smith",
        	email: "so.website@shf.sccgov.org",
        },
        {
        	label: "Denver",
        	name: "Mayor Michael Hancock",
        	email: "mayorsoffice@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilwoman Amanda P. Sandoval",
        	email: "districtone@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilman Kevin Flynn",
        	email: "kevin.flynn@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilwoman Jamie Torres",
        	email: "Jamie.Torres@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilwoman Kendra Black",
        	email: "kendra.black@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilwoman Amanda Sawyer",
        	email: "DenverCouncil5@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilman Paul Kashmann",
        	email: "paul.kashmann@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilman Jolon Clark",
        	email: "jolon.clark@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilman Christopher Herndon",
        	email: "christopher.herndon@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilwoman Candi CdeBaca",
        	email: "district9@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilman Chris Hinds",
        	email: "chris.hinds@denvergov.org",
        },
        {
        	label: "Denver",
        	name: "Councilwoman Stacie Gilmore",
        	email: "stacie.gilmore@denvergov.org",
        },
        {
        	label: "DC",
        	name: "Mayor Muriel Bowser",
        	email: "eom@dc.gov",
        },
        {
        	label: "DC",
        	name: "Chairman Phil Mendelson",
        	email: "pmendelson@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Kenyan McDuffie",
        	email: "kmcduffie@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Anita Bonds",
        	email: "abonds@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember David Grosso",
        	email: "dgrosso@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Robert White",
        	email: "rwhite@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Elissa Silverman",
        	email: "esilverman@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Brianne Nadeau",
        	email: "bnadeau@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Mary Cheh",
        	email: "mcheh@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Brandon Todd",
        	email: "btodd@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Charles Allen",
        	email: "callen@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Vincent Gray",
        	email: "vgray@dccouncil.us",
        },
        {
        	label: "DC",
        	name: "Councilmember Trayon White",
        	email: "twhite@dccouncil.us",
        },
        {
        	label: "Gainesville",
        	name: "Mayor Lauren Poe",
        	email: "poelb@cityofgainesville.org",
        },
        {
        	label: "Gainesville",
        	name: "Commissioner Reina Saco",
        	email: "sacore@cityofgainesville.org",
        },
        {
        	label: "Gainesville",
        	name: "Commissioner Gail Johnson",
        	email: "johnsong1@cityofgainesville.org",
        },
        {
        	label: "Gainesville",
        	name: "Commissioner Gigi Simmons",
        	email: "simmonsgg@cityofgainesville.org",
        },
        {
        	label: "Gainesville",
        	name: "Commissioner Harvey Ward",
        	email: "wardhl@cityofgainesville.org",
        },
        {
        	label: "Gainesville",
        	name: "Commissioner David Arreola",
        	email: "arreoladi@cityofgainesville.org",
        },
        {
        	label: "Gainesville",
        	name: "Commissioner Adrian Hayes-Santos",
        	email: "hayessantosa@cityofgainesville.org",
        },
        {
        	label: "Jacksonville",
        	name: "Mayor Lenny Curry",
        	email: "MayorLennyCurry@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Joyce Morgan",
        	email: "JoyceMorgan@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Al Ferraro",
        	email: "Ferraro@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Aaron L. Bowman",
        	email: "ABowman@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Scott Wilson",
        	email: "SWilson@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember LeAnna Cumber",
        	email: "LCumber@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Michael Boylan",
        	email: "MBoylan@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Reggie Gaffney",
        	email: "RGaffney@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Ju'Coby Pittman",
        	email: "JPittman@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Garrett L. Dennis",
        	email: "GarrettD@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Brenda Priestly Jackson",
        	email: "BPJackson@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Danny Becton",
        	email: "DBecton@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Randy White",
        	email: "RandyWhite@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Rory Diamond",
        	email: "RDiamond@coj.net",
        },
        {
        	label: "Jacksonville",
        	name: "Councilmember Randy DeFoor",
        	email: "RDeFoor@coj.net",
        },
        {
        	label: "Miami",
        	name: "Mayor Francis X. Suarez",
        	email: "fsuarez@miamigov.com",
        },
        {
        	label: "Miami",
        	name: "Commissioner Alex Diaz de la Portilla",
        	email: "adiazdelaportilla@miamigov.com",
        },
        {
        	label: "Miami",
        	name: "Commissioner Ken Russell",
        	email: "krussell@miamigov.com",
        },
        {
        	label: "Miami",
        	name: "Commissioner Joe Carollo",
        	email: "jcarollo@miamigov.com",
        },
        {
        	label: "Miami",
        	name: "Commissioner Manolo Reyes",
        	email: "mreyes@miamigov.com",
        },
        {
        	label: "Miami",
        	name: "Commissioner Keon Hardemon",
        	email: "KHardemon@miamigov.com",
        },
        {
        	label: "Orlando",
        	name: "Mayor Buddy Dyer",
        	email: "buddy.dyer@orlando.gov",
        },
        {
        	label: "Orlando",
        	name: "Commissioner Jim Gray",
        	email: "jim.gray@orlando.gov",
        },
        {
        	label: "Orlando",
        	name: "Commissioner Tony Ortiz",
        	email: "tony.ortiz@orlando.gov",
        },
        {
        	label: "Orlando",
        	name: "Commissioner Robert F. Stuart",
        	email: "robert.stuart@orlando.gov",
        },
        {
        	label: "Orlando",
        	name: "Commissioner Patty Sheehan",
        	email: "patty.sheehan@orlando.gov",
        },
        {
        	label: "Orlando",
        	name: "Commissioner Regina I. Hill",
        	email: "regina.hill@orlando.gov",
        },
        {
        	label: "Orlando",
        	name: "Commissioner Bakari F. Burns",
        	email: "bakari.burns@orlando.gov",
        },
        {
        	label: "Atlanta",
        	name: "Mayor Keisha Lance Bottoms",
        	email: "kbottoms@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Council President Felicia A. Moore",
        	email: "fmoore@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Carla Smith",
        	email: "csmith@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Amir R. Farokhi",
        	email: "arfarokhi@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Antonio Brown",
        	email: "antoniobrown@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Cleta Winslow",
        	email: "cwinslow@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Natalyn Archibong",
        	email: "narchibong@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Jennifer N. Ide",
        	email: "jnide@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Howard Shook",
        	email: "hshook@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember J.P. Matzigkeit",
        	email: "jpmatzigkeit@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Dustin Hills",
        	email: "drhillis@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Andrea L. Boone",
        	email: "aboone@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Marci Collier Overstreet",
        	email: "mcoverstreet@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Joyce Sheperd",
        	email: "jmsheperd@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Michael Julian Bond",
        	email: "mbond@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Matt Westmoreland",
        	email: "mwestmoreland@atlantaga.gov",
        },
        {
        	label: "Atlanta",
        	name: "Councilmember Andre Dickens",
        	email: "adickens@atlantaga.gov",
        },
        {
        	label: "Chicago",
        	name: "Mayor Lori Lightfoot",
        	email: "letterforthemayor@cityofchicago.org",
        },
        {
        	label: "Chicago",
        	name: "Sheriff Thomas Dart",
        	email: "sheriff.dart@cookcountyil.gov",
        },
        {
        	label: "Chicago",
        	name: "State's Attorney Kimberly Foxx",
        	email: "statesattorney@cookcountyil.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Lery Robinson",
        	email: "leroy.robinson@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Keith Potts",
        	email: "keith.potts@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Dan Boots",
        	email: "Dan.Boots@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Ethan Evans",
        	email: "Ethan.Evans2@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Ali Brown",
        	email: "ali.brown@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Crista Carlino",
        	email: "crista.carlino@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor John Barth",
        	email: "John.Barth@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Monroe Gray, Jr.",
        	email: "monroe.gray@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor William Oliver",
        	email: "william.oliver@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Maggie A. Lewis",
        	email: "maggie.lewis@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Vop Osili",
        	email: "Vop.Osili@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Blake Johnson",
        	email: "blake.johnson@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Keith L. Graves",
        	email: "keith.graves@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor La Keisha Jackson",
        	email: "lakeisha.jackson@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Jessica McCormick",
        	email: "jessica.mccormick@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Kristin Jones",
        	email: "kristin.jones@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Zach Adamson",
        	email: "Zach@adamsonforindy.com",
        },
        {
        	label: "Indy",
        	name: "Councillor Michael-Paul Hart",
        	email: "michael-paul.hart@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor David Ray",
        	email: "david.ray@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Jason Holliday",
        	email: "jasonhollidayccc20@gmail.com",
        },
        {
        	label: "Indy",
        	name: "Councillor Frank Mascari",
        	email: "frank.mascari@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Jared Evans",
        	email: "jared.evans@indy.gov",
        },
        {
        	label: "Indy",
        	name: "Councillor Paul Annee",
        	email: "paul.anneed23@gmail.com",
        },
        {
        	label: "Indy",
        	name: "Councillor Michael Dilk",
        	email: "mike.dilk424@gmail.com",
        },
        {
        	label: "Indy",
        	name: "Councillor Brian Mowery",
        	email: "brian.mowery@indy.gov",
        },
        {
        	label: "Baltimore",
        	name: "Mayor Bernard Young",
        	email: "mayor@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Council President Brandon M. Scott",
        	email: "CouncilPresident@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Zeke Cohen",
        	email: "zeke.cohen@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Ryan Dorsey",
        	email: "ryan.dorsey@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Bill Henry",
        	email: "Bill.Henry@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Sharon Green Middleton",
        	email: "Sharon.Middleton@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Leon Pinkett III",
        	email: "leon.pinkett@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Kristerfer Burnett",
        	email: "Kristerfer.Burnett@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember John T. Bullock",
        	email: "John.Bullock@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Edward L. Reisinger",
        	email: "Edward.Reisinger@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Eric Costello",
        	email: "Eric.Costello@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Robert Stokes, Sr.",
        	email: "Robert.stokes@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Shannon Sneed",
        	email: "Shannon.Sneed@baltimorecity.gov",
        },
        {
        	label: "Baltimore",
        	name: "Councilmember Mary Pat Clarke",
        	email: "MaryPat.Clarke@baltimorecity.gov",
        },
        {
        	label: "Boston",
        	name: "Mayor Martin Walsh",
        	email: "mayor@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Annissa Essaibi George",
        	email: "A.E.George@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Michael Flaherty",
        	email: "Michael.F.Flaherty@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Michelle Wu",
        	email: "Michelle.Wu@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Lydia Edwards",
        	email: "lydia.edwards@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Ed Flynn",
        	email: "ed.flynn@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Frank Baker",
        	email: "Frank.Baker@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Andrea Campbell",
        	email: "Andrea.Campbell@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Ricardo Arroyo",
        	email: "ricardo.arroyo@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Matt O'Malley",
        	email: "matthew.omalley@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Councilmember Kenzie Bok",
        	email: "kenzie.bok@boston.gov",
        },
        {
        	label: "Boston",
        	name: "Commissioner William Gross",
        	email: "mediarelations@pd.boston.gov",
        },
        {
        	label: "Somerville",
        	name: "Mayor Joseph A. Curtatone",
        	email: "mayor@somervillema.gov",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Matthew McLaughlin",
        	email: "mattforward1@gmail.com",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Mary Jo Rossetti",
        	email: "mjrossetti@somervillema.gov",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Kristen Strezo",
        	email: "strezoatlarge@gmail.com",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Wilfred N. Mbah",
        	email: "aldermanmbah@gmail.com",
        },
        {
        	label: "Somerville",
        	name: "Councilmember William A. White, Jr.",
        	email: "william.a.white@verizon.net",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Jefferson Thomas Scott",
        	email: "jtscott@somervillema.gov",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Ben Ewen-Campen",
        	email: "benforward3@gmail.com",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Jesse Clingan",
        	email: "aldermanclingan@gmail.com",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Mark Niedergang",
        	email: "mniedergang@somervillema.gov",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Lance Davis",
        	email: "lancedavisward6@gmail.com",
        },
        {
        	label: "Somerville",
        	name: "Councilmember Katjana Ballantyne",
        	email: "katjana@katjana.org",
        },
        {
        	label: "Worcester",
        	name: "Mayor Joseph M. Petty",
        	email: "Mayor@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Morris A. Bergman",
        	email: "BergmanM@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Donna M. Colorio",
        	email: "ColorioD@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Khrystian E. King",
        	email: "KingK@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Gary Rosen",
        	email: "RosenG@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Kathleen M. Toomey",
        	email: "ToomeyK@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Candy F. Mero-Carlson",
        	email: "Mero-CarlsonC@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember George J. Russell",
        	email: "RussellG@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Sarai Rivera",
        	email: "RiveraSA@worcesterma.gov",
        },
        {
        	label: "Worcester",
        	name: "Councilmember Matthew E. Wally",
        	email: "WallyM@worcesterma.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Mayor Jacob Frey",
        	email: "Jacob.Frey@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Kevin Reich",
        	email: "kevin.reich@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Cam Gordon",
        	email: "cam.gordon@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Steve Fletcher",
        	email: "steve.fletcher@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Phillipe Cunningham",
        	email: "Phillipe.Cunningham@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Jeremiah Ellison",
        	email: "Jeremiah.Ellison@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Lisa Goodman",
        	email: "Lisa.Goodman@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Andrea Jenkins",
        	email: "Andrea.Jenkins@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Alondra Cano",
        	email: "Alondra.Cano@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Lisa Bender",
        	email: "Lisa.Bender@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Jeremy Schroeder",
        	email: "Jeremy.Schroeder@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Andrew Johnson",
        	email: "Andrew.Johnson@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Councilmember Linea Palmisano",
        	email: "Linea.Palmisano@minneapolismn.gov",
        },
        {
        	label: "Minneapolis",
        	name: "Director Velma Korbel",
        	email: "velma.korbel@minneapolismn.gov",
        },
        {
        	label: "Greene County",
        	name: "Representative Sonya Anderson",
        	email: "Sonya.Anderson@house.mo.gov",
        },
        {
        	label: "Greene County",
        	name: "Representative Jeffrey Messenger",
        	email: "Jeff.Messenger@house.mo.gov",
        },
        {
        	label: "Kansas City",
        	name: "Representative Keri Ingle",
        	email: "Keri.Ingle@house.mo.gov",
        },
        {
        	label: "Kansas City",
        	name: "Representative Ingrid Burnett",
        	email: "Ingrid.Burnett@house.mo.gov",
        },
        {
        	label: "Kansas City",
        	name: "Representative Barbara Washington",
        	email: "Barbara.Washington@house.mo.gov",
        },
        {
        	label: "St. Louis",
        	name: "Mayor Lyda Krewson",
        	email: "krewsonl@stlouis-mo.gov",
        },
        {
        	label: "St. Louis",
        	name: "Senator Jill Schupp",
        	email: "jill.schupp@senate.mo.gov",
        },
        {
        	label: "St. Louis",
        	name: "Representative Tracy McCreery",
        	email: "Tracy.McCreery@house.mo.gov",
        },
        {
        	label: "St. Louis",
        	name: "Representative Tommie Pierson",
        	email: "Tommie.PiersonJr@house.mo.gov",
        },
        {
        	label: "St. Louis",
        	name: "Representative Kevin Windham",
        	email: "Kevin.Windhamjr@house.mo.gov",
        },
        {
        	label: "St. Louis",
        	name: "Representative Sarah Unsicker",
        	email: "Sarah.Unsicker@house.mo.gov",
        },
        {
        	label: "Missouri",
        	name: "Representative J. Eggleston",
        	email: "J.Eggleston@house.mo.gov",
        },
        {
        	label: "Missouri",
        	name: "Representative Chris Dinkins",
        	email: "Chris.Dinkins@house.mo.gov",
        },
        {
        	label: "Las Vegas",
        	name: "Mayor Carolyn Goodman",
        	email: "cgoodman@lasvegasnevada.gov",
        },
        {
        	label: "Las Vegas",
        	name: "Councilman Brian Knudsen",
        	email: "ward1@lasvegasnevada.gov",
        },
        {
        	label: "Las Vegas",
        	name: "Councilwoman Victoria Seaman",
        	email: "ward2@lasvegasnevada.gov",
        },
        {
        	label: "Las Vegas",
        	name: "Councilwoman Olivia Diaz",
        	email: "ward3@lasvegasnevada.gov",
        },
        {
        	label: "Las Vegas",
        	name: "Councilman Stavros S. Anthony",
        	email: "ward4newsletter@lasvegasnevada.gov",
        },
        {
        	label: "Las Vegas",
        	name: "Councilman Cedric Crear",
        	email: "ccrear@lasvegasnevada.gov",
        },
        {
        	label: "Las Vegas",
        	name: "Councilwoman Michele Fiore",
        	email: "mfiore@lasvegasnevada.gov",
        },
        {
        	label: "Las Vegas",
        	name: "City Manager Scott D. Adams",
        	email: "sadams@lasvegasnevada.gov",
        },
        {
        	label: "Reno",
        	name: "Mayor Hillary Schieve",
        	email: "mayor@reno.gov",
        },
        {
        	label: "Reno",
        	name: "Rick Caldeira",
        	email: "caldeirar@reno.gov",
        },
        {
        	label: "Reno",
        	name: "Councilmember Devon Reese",
        	email: "reesed@reno.gov",
        },
        {
        	label: "Reno",
        	name: "Councilmember Jenny Brekhus",
        	email: "brekhusj@reno.gov",
        },
        {
        	label: "Reno",
        	name: "Councilmember Naomi Duerr",
        	email: "duerrn@reno.gov",
        },
        {
        	label: "Reno",
        	name: "Councilmember Oscar Delgado",
        	email: "delgadoo@reno.gov",
        },
        {
        	label: "Reno",
        	name: "Councilmember Bonnie Weber",
        	email: "weberb@reno.gov",
        },
        {
        	label: "Reno",
        	name: "Councilmember Neoma Jardon",
        	email: "jardonn@reno.gov",
        },
        {
        	label: "Buffalo",
        	name: "Mayor Bryon W. Brown",
        	email: "mayor@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Darius G. Pridgen",
        	email: "dpridgen@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember David A. Rivera",
        	email: "darivera@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Christopher P. Scanlon ",
        	email: "cscanlon@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Joel P. Feroleto",
        	email: "jferoleto@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Bryan Bollman",
        	email: "bbollman@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Mitch Nowakowski",
        	email: "mnowakowski@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Joseph Golombek, Jr.",
        	email: "jgolombek@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Ulysees O. Wingo, Sr.",
        	email: "uwingo@city-buffalo.com",
        },
        {
        	label: "Buffalo",
        	name: "Councilmember Rasheed N.C. Wyatt",
        	email: "rwyatt@city-buffalo.com",
        },
        {
        	label: "NYC",
        	name: "Mayor Bill de Blasio",
        	email: "bdeblasio@cityhall.nyc.gov",
        },
        {
        	label: "NYC",
        	name: "Manhattan Borough President Gale Brewer",
        	email: "gbrewer@manhattanbp.nyc.gov",
        },
        {
        	label: "NYC",
        	name: "Director Jeremy Unger",
        	email: "junger@council.nyc.gov",
        },
        {
        	label: "NYC",
        	name: "Councilperson Corey Johnson",
        	email: "SpeakerJohnson@council.nyc.gov",
        },
        {
        	label: "NYC",
        	name: "Councilperson Keith Powers",
        	email: "kpowers@council.nyc.gov",
        },
        {
        	label: "NYC",
        	name: "Senator Brad Hoylman",
        	email: "hoylman@nysenate.gov",
        },
        {
        	label: "NYC",
        	name: "Senator Brian Kavanaugh",
        	email: "kavanagh@nysenate.gov",
        },
        {
        	label: "NYC",
        	name: "Assemblymember Richard Gottfried",
        	email: "GottfriedR@assembly.state.ny.us",
        },
        {
        	label: "NYC",
        	name: "Assemblymember Deborah Glick",
        	email: "glickd@assembly.state.ny.us",
        },
        {
        	label: "Rochester",
        	name: "Mayor Lovely A. Warren",
        	email: "info@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Loretta C. Scott",
        	email: "Loretta.Scott@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Malik D. Evans",
        	email: "Malik.Evans@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Mitchell D. Gruber",
        	email: "Mitch.Gruber@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Willie J. Lightfoot",
        	email: "Willie.Lightfoot@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Jacklyn Ortiz",
        	email: "Jacklyn.Ortiz@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember LaShay D. Harris",
        	email: "LaShay.Harris@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Mary Lupien",
        	email: "Mary.Lupien@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Michael A. Patterson",
        	email: "Michael.Patterson@cityofrochester.gov",
        },
        {
        	label: "Rochester",
        	name: "Councilmember Jose Peo",
        	email: "Jose.Peo@cityofrochester.gov",
        },
        {
        	label: "Apex",
        	name: "Mayor Jacques Gilbert",
        	email: "jacques.gilbert@apexnc.org",
        },
        {
        	label: "Apex",
        	name: "Mayor Pro Tem Nicole Dozier",
        	email: "nicole.dozier@apexnc.org",
        },
        {
        	label: "Apex",
        	name: "Council Member Brett Gantt",
        	email: "brett.gantt@apexnc.org",
        },
        {
        	label: "Apex",
        	name: "Council Member Audra Killingsworth",
        	email: "audra.killingsworth@apexnc.org",
        },
        {
        	label: "Apex",
        	name: "Council Member Terry Mahaffey",
        	email: "terry.mahaffey@apexnc.org",
        },
        {
        	label: "Apex",
        	name: "Council Member Cheryl Stallings",
        	email: "cheryl.stallings@apexnc.org",
        },
        {
        	label: "Apex",
        	name: "Chief John Letteney",
        	email: "John.Letteney@apexnc.org",
        },
        {
        	label: "Cary",
        	name: "Chief Toni Dezomits",
        	email: "toni.dezomits@townofcary.org",
        },
        {
        	label: "Cary",
        	name: "Councilman Jack Smith",
        	email: "jack.smith@townofcary.org",
        },
        {
        	label: "Cary",
        	name: "Councilman Ed Yerha",
        	email: "ed.yerha@townofcary.org",
        },
        {
        	label: "Cary",
        	name: "Councilwoman Ya Liu",
        	email: "ya.liu@townofcary.org",
        },
        {
        	label: "Cary",
        	name: "Mayor Harold Weinbrecht",
        	email: "harold.weinbrecht@townofcary.org",
        },
        {
        	label: "Cary",
        	name: "Councilwoman Jennifer Robinson",
        	email: "jennifer.robinson@townofcary.org",
        },
        {
        	label: "Cary",
        	name: "Mayor Pro Tem Don Frantz",
        	email: "don.frantz@townofcary.org",
        },
        {
        	label: "Cary",
        	name: "Councilwoman Lori Bush",
        	email: "lori.bush@townofcary.org",
        },
        {
        	label: "Durham County",
        	name: "Chair Wendy Jacobs",
        	email: "wjacobs@dconc.gov",
        },
        {
        	label: "Durham County",
        	name: "Vice-Chairman James Hill",
        	email: "jahill@dconc.gov",
        },
        {
        	label: "Durham County",
        	name: "Commissioner Heidi Carter",
        	email: "hcarter@dconc.gov",
        },
        {
        	label: "Durham County",
        	name: "Commissioner Brenda Howerton",
        	email: "bhowerton@dconc.gov",
        },
        {
        	label: "Durham County",
        	name: "Commissioner Ellen Reckhow",
        	email: "ereckhow@dconc.gov",
        },
        {
        	label: "Durham County",
        	name: "Sheriff Clarence Birkhead",
        	email: "sheriffbirkhead@durhamsheriff.org",
        },
        {
        	label: "Durham",
        	name: "Councilwoman Javiera Caballero",
        	email: "Javiera.Caballero@durhamnc.gov",
        },
        {
        	label: "Durham",
        	name: "Councilwoman DeDreana Freeman",
        	email: "dedreana.freeman@durhamnc.gov",
        },
        {
        	label: "Durham",
        	name: "Councilman Mark-Anthony Middleton",
        	email: "Mark-Anthony.Middleton@durhamnc.gov",
        },
        {
        	label: "Durham",
        	name: "Mayor Pro Tempore Jillian Johnson",
        	email: "Jillian.Johnson@durhamnc.gov",
        },
        {
        	label: "Durham",
        	name: "Councilman Charlie Reece",
        	email: "charlie.reece@durhamnc.gov",
        },
        {
        	label: "Durham",
        	name: "Mayor Steve Schewel",
        	email: "Steve.Schewel@durhamnc.gov",
        },
        {
        	label: "Durham",
        	name: "Chief CJ Davis",
        	email: "policechief@durhamnc.gov",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Town Manager Adam Mitchell",
        	email: "amitchell@fuquay-varina.org",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Mayor John Byrne",
        	email: "jbyrne@fuquay-varina.org",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Mayor Pro Tem Blake Massengill",
        	email: "bmassengill@fuquay-varina.org",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Commissioner Marilyn Gardner",
        	email: "mgardner@fuquay-varina.org",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Commissioner William Harris",
        	email: "wharris@fuquay-varina.org",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Commissioner Larry Smith",
        	email: "lsmith@fuquay-varina.org",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Commissioner Jason Wunsch",
        	email: "jwunsch@fuquay-varina.org",
        },
        {
        	label: "Fuquay-Varina",
        	name: "Chief Laura Fahnestock",
        	email: "lfahnestock@fuquay-varina.org",
        },
        {
        	label: "Raleigh",
        	name: "City Manager Ruffin Hall",
        	email: "citymanager@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Chief Cassandra Deck-Brown",
        	email: "cassandra.deck-brown@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Mayor Mary-Ann Baldwin",
        	email: "mary-ann.baldwin@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Councilman Jonathan Melton",
        	email: "jonathan.melton@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Councilwoman Nicole Stewart",
        	email: "nicole.stewart@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Councilman Patrick Buffkin",
        	email: "patrick.buffkin@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Councilman David Cox",
        	email: "david.cox@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Councilman Corey Branch",
        	email: "corey.branch@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Councilman Saige Martin",
        	email: "saige.martin@raleighnc.gov",
        },
        {
        	label: "Raleigh",
        	name: "Councilman David Knight",
        	email: "david.knight@raleighnc.gov",
        },
        {
        	label: "Wake County",
        	name: "Commissioner Sig Hutchinson",
        	email: "Sig.Hutchinson@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "Commissioner Matt Calabria",
        	email: "Matt.Calabria@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "Commissioner Susan Evans",
        	email: "Susan.Evans@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "Commissioner Jessica Holmes",
        	email: "Jessica.Holmes@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "Commissioner James West",
        	email: "james.west@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "Chairman Greg Ford",
        	email: "Greg.Ford@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "Vice-Chair Vickie Adamson",
        	email: "Vickie.Adamson@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "County Manager David Ellis",
        	email: "David.Ellis@wakegov.com",
        },
        {
        	label: "Wake County",
        	name: "Sheriff Gerald Baker",
        	email: "gerald.baker@wakegov.com",
        },
        {
        	label: "Columbus",
        	name: "Mayor Andrew J. Ginther",
        	email: "311@columbus.gov",
        },
        {
        	label: "Columbus",
        	name: "Council President Shannon G. Hardin",
        	email: "sghardin@columbus.gov",
        },
        {
        	label: "Columbus",
        	name: "Councilmember Rob Dorans",
        	email: "radorans@columbus.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Mayor David Holt",
        	email: "mayor@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember James Greiner",
        	email: "ward1@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember James Cooper",
        	email: "ward2@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember Larry McAtee",
        	email: "ward3@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember Todd Stone",
        	email: "ward4@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember David Greenwell",
        	email: "ward5@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember JoBeth Hamon",
        	email: "ward6@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember Nikki Nice",
        	email: "ward7@okc.gov",
        },
        {
        	label: "Oklahoma City",
        	name: "Councilmember Mark Stonecipher",
        	email: "ward8@okc.gov",
        },
        {
        	label: "Portland",
        	name: "Mayor Ted Wheeler",
        	email: "mayorwheeler@portlandoregon.gov",
        },
        {
        	label: "Portland",
        	name: "Commissioner Amanda Fritz",
        	email: "Amanda@portlandoregon.gov",
        },
        {
        	label: "Portland",
        	name: "Commissioner Jo Ann Hardesty",
        	email: "JoAnn@portlandoregon.gov",
        },
        {
        	label: "Portland",
        	name: "Commissioner Nick Fish",
        	email: "nick@portlandoregon.gov",
        },
        {
        	label: "Portland",
        	name: "Commissioner Chloe Eudaly",
        	email: "chloe@portlandoregon.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Mayor Jim Kenney",
        	email: "james.kenney@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Council President Darrell Clarke",
        	email: "darrell.clarke@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Mark Squilla",
        	email: "mark.squilla@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Kenyatta Johnson",
        	email: "kenyatta.johnson@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Jamie Gauthier",
        	email: "jamie.gauthier@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Curtis Jones",
        	email: "curtis.jones@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Bobby Henon",
        	email: "bobby@bobbyhenon.com",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Maria Quiñones Sánchez",
        	email: "maria.q.sanchez@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Cindy Bass",
        	email: "cindy.bass@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Cherelle Parker",
        	email: "cherelle.parker@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Brian O'Neill",
        	email: "brian.o'neill@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Kendra Brooks",
        	email: "Kendra.Brooks@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Allan Domb",
        	email: "allan.domb@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Derek Green",
        	email: "derek.green@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Helen Gym",
        	email: "helen.gym@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember David Oh",
        	email: "david.oh@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Councilmember Isaiah Thomas",
        	email: "Isaiah.Thomas@phila.gov",
        },
        {
        	label: "Philadelphia",
        	name: "Commissioner Richard Ross",
        	email: "police.commissioner@phila.gov",
        },
        {
        	label: "Austin",
        	name: "Mayor Steve Adler",
        	email: "steve.adler@austintexas.gov",
        },
        {
        	label: "Dallas",
        	name: "Mayor Pro Tem Adam Medrano",
        	email: "adam.medrano@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Deputy Mayor Pro Tem B. Adam McGough",
        	email: "adam.mcgough@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Council Liaison Laura Cadena",
        	email: "Laura.Cadena@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Council Assistant Yesenia Valdez",
        	email: "Yesenia.Valdez@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Chad West",
        	email: "Chad.West@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Casey Thomas, II",
        	email: "richard.soto@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Carolyn King Arnold",
        	email: "District4@DallasCityHall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Jaime Resendez",
        	email: "jaime.resendez@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Tennell Atkins",
        	email: "maria.salazar2@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Paula Blackmon",
        	email: "District9@DallasCityHall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Lee M. Kleinman",
        	email: "sophia.figueroa@dallascityhall.com",
        },
        {
        	label: "Dallas",
        	name: "Councilmember Cara Mendelsohn",
        	email: "cara.mendelsohn@dallascityhall.com",
        },
        {
        	label: "Houston",
        	name: "Mayor Sylvester Turner",
        	email: "mayor@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Amy Peck",
        	email: "districta@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Jerry Davis",
        	email: "districtb@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Abbie Kamin",
        	email: "districtc@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Carolyn Evans-Shabazz",
        	email: "districtd@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Dave Martin",
        	email: "districte@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Tiffany Thomas",
        	email: "districtf@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Greg Travis",
        	email: "districtg@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Karla Cisneros",
        	email: "districth@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Robert Gallegos",
        	email: "districti@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Edward Pollard",
        	email: "districtj@houstontx.gov",
        },
        {
        	label: "Houston",
        	name: "Councilmember Martha Castex-Tatum",
        	email: "districtk@houstontx.gov",
        },
        {
        	label: "Plano",
        	name: "Mayor Harry LaRosiliere",
        	email: "mayor@plano.gov",
        },
        {
        	label: "Plano",
        	name: "Mayor Pro Tem Kayci Prince",
        	email: "kayciprince@plano.gov",
        },
        {
        	label: "Plano",
        	name: "Deputy Mayor Pro Tem Anthony Ricciardelli",
        	email: "aricciardelli@plano.gov",
        },
        {
        	label: "Plano",
        	name: "Councilmember Maria Tu",
        	email: "mariatu@plano.gov",
        },
        {
        	label: "Plano",
        	name: "Councilmember Rick Grady",
        	email: "rickgrady@plano.gov",
        },
        {
        	label: "Plano",
        	name: "Councilmember Shelby Williams",
        	email: "shelbywilliams@plano.gov",
        },
        {
        	label: "Plano",
        	name: "Councilmember Rick Smith",
        	email: "ricksmith@plano.gov",
        },
        {
        	label: "Plano",
        	name: "Councilmember Lily Bao",
        	email: "lilybao@plano.gov",
        },
        {
        	label: "San Antonio",
        	name: "Mayor Ron Nirenberg",
        	email: "ron.nirenberg@sanantonio.gov",
        },
        {
        	label: "San Antonio",
        	name: "Councilmember Roberto C. Trevino",
        	email: "district1@sanantonio.gov",
        },
        {
        	label: "San Antonio",
        	name: "Councilmember Jada Andrews-Sullivan",
        	email: "district2@sanantonio.gov",
        },
        {
        	label: "San Antonio",
        	name: "Councilmember Shirley Gonzales",
        	email: "Shirley.Gonzales@sanantonio.gov",
        },
        {
        	label: "Burlington",
        	name: "Mayor Miro Weinberger",
        	email: "mayor@burlingtonvt.gov",
        },
        {
        	label: "Burlington",
        	name: "Councilmember Zoraya Hightower",
        	email: "zhightower@burlingtonvt.gov",
        },
        {
        	label: "Burlington",
        	name: "Councilmember Max Tracy",
        	email: "mtracy@burlingtonvt.gov",
        },
        {
        	label: "Burlington",
        	name: "Councilmember Brian Pine",
        	email: "bpine@burlingtonvt.gov",
        },
        {
        	label: "Burlington",
        	name: "Councilmember Sarah Carpenter",
        	email: "scarpenter@burlingtonvt.gov",
        },
        {
        	label: "Burlington",
        	name: "Councilmember William Mason",
        	email: "cmason@burlingtonvt.gov",
        },
        {
        	label: "Burlington",
        	name: "Councilmember Karen Paul",
        	email: "kpaul@burlingtonvt.gov",
        },
        {
        	label: "Burlington",
        	name: "Councilmember Ali Dieng",
        	email: "adieng@burlingtonvt.gov",
        },
        {
        	label: "Seattle",
        	name: "Mayor Jenny Durkan",
        	email: "jenny.durkan@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Lisa Herbold",
        	email: "lisa.herbold@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Tammy Morales",
        	email: "tammy.morales@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Kshama Sawant",
        	email: "kshama.sawant@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Alex Pedersen",
        	email: "alex.pedersen@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Debora Juerez",
        	email: "debora.juarez@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Dan Strauss",
        	email: "dan.strauss@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Andrew Lewis",
        	email: "andrew.lewis@seattle.gov",
        },
        {
        	label: "Seattle",
        	name: "Councilmember Teresa Mosqueda",
        	email: "teresa.mosqueda@seattle.gov",
        },
        {
        	label: "Spokane",
        	name: "Mayor Nadine Woodward",
        	email: "mayor@spokanecity.org",
        },
        {
        	label: "Spokane",
        	name: "Councilmember Breean Beggs",
        	email: "bbeggs@spokanecity.org",
        },
        {
        	label: "Spokane",
        	name: "Councilmember Michael Cathcart",
        	email: "mcathcart@spokanecity.org",
        },
        {
        	label: "Spokane",
        	name: "Councilmember Kate Burke",
        	email: "kateburke@spokanecity.org",
        },
        {
        	label: "Spokane",
        	name: "Councilmember Lori Kinnear",
        	email: "lkinnear@spokanecity.org",
        },
        {
        	label: "Spokane",
        	name: "Councilmember Betsy Wilkerson",
        	email: "bwilkerson@spokanecity.org",
        },
        {
        	label: "Spokane",
        	name: "Councilmember Candace Mumm",
        	email: "cmumm@spokanecity.org",
        },
        {
        	label: "Spokane",
        	name: "Councilmember Karen Stratton",
        	email: "kstratton@spokanecity.org",
        },
        {
        	label: "Tacoma",
        	name: "Mayor Victoria Woodards",
        	email: "nnowman@cityoftacoma.org",
        },

      ]),
      modalBody: `Description`,
      modalTitle: `Emailing our elected officials for specific changes`,
      modalUrl: [
        `https://docs.google.com/document/u/1/d/1qbq7YfJs102qJbGwGO1-wFa0diG16LdGYqiOoQ-hRAI/mobilebasic`,
      ],
    }

    return ret_val
  })
  .catch(error => console.log("Error: ", error))

}

export default buildEmail
