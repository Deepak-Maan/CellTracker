import {
  AccurateLocation,
  InstallIcon,
  LocateLocation,
  Location,
  Location1,
  NetworkIcon,
  Peoples,
  PrivateIcon,
  PuzzleIcon,
  Quesmark,
  RightTick,
  Robit,
  Robot,
  Setting,
} from "./Icons";
export const navData = [
 
  {
    Ques : <Quesmark/>,
    name: "How It Works" , url: "#Work",
  },
  {
    name: "Log in",  url: "#Login",
  },
];
export const joinCompanies = [
  {
    description: "Ideal for freelancers and solopreneurs",
    rightclick: <RightTick />,
    seat: "1 seat",
    projects: "2 projects",
    priceperseat: "$0",
    billmonth: "free forever",
  },
  {
    description: "Perfect for teams, startups, and growing businesses.",
    rightclick: <RightTick />,
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    priceperseat: "$10.80",
    billmonth: "per seat/month (billed annually)",
  },
];
export const PrivaryData = [
  {
    Icon: <PuzzleIcon />,
    Heading: "compatible for every phones",
    Description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    Icon: <NetworkIcon />,
    Heading: "Covers all networks",
    Description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    Icon: <InstallIcon />,
    Heading: "No installation required",
    Description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
  {
    Icon: <PrivateIcon />,
    Heading: "compatible for every phones",
    Description:
      "Fames tincidunt pellentesque nisl blandit at sit. Ullamcorper nisi vestibulum fames libero id.",
  },
];
export const AdvantageData = [
  {
    icon: <Location />,
    title: "Instant location lookups",
    description:
      "Check the location of your registered phones whenever you choose. Add up to 5 phones to your account.",
  },
  {
    icon: <Robot />,
    title: "Android & iPhone compatible",
    description:
      "Our service works with any Android or iPhone device, and takes just minutes to set up.",
    margintop: "[23px]",
  },
  {
    icon: <Setting />,
    title: "Simple to use",
    description:
      "Our service has been designed to be simple to use. Just follow our walkthrough wizard to locate your phone.",
  },
  {
    icon: <Peoples />,
    title: "Keep your family safe",
    description:
      "Keep track of your family using our tools. Know that your children or elderly relatives are safe.",
    margintop: "[23px]",
  },
];
export const workitData = [
  {
    Icon: <LocateLocation />,
    Heading: "Locate the people important to you, from any web device",
    Description:
      "Family will always be number one and keeping them safe has never been more important. Locateaphone.com allows you to keep track of up to 5 mobile phones, providing you with accurate location information from any web enabled device. Keep them safe without being invasive.",
  },

  {
    Icon: <AccurateLocation />,
    Heading: "Accurate location info for any phone on any network.",
    Description:
      "Instantly track the location of a mobile phone at any time. No apps, no downloads, Locateaphone.com works with any Android or iPhone device. Locateaphone.com uses a range of different tools to find the location of a phone. Our unique phone location walkthrough process will determine the best tools to use for each situation.",
  },
];
