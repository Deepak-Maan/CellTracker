import {
  ContactsIcon,
  AccurateLocation,
  LocateLocation,
  Peoples,
  Robot,
  Setting,
  FindLocationIcon,
  FindMessagesIcon,
  InstallIcon,
  LoopIcon,
  MessagesIcon,
  NetworkIcon,
  PhoneIcon,
  PrivateIcon,
  PuzzleIcon,
  SettingIcon,
  WorksLocationIcon,
  Quesmark,
  Track,
  Multiple,
  Protect,
  Money,
  Private,
  Createlocation,
  Tick,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  InstantLocation,
} from "./Icons";

// footer data
export const homepageFooterLinks = [
  { href: "#home", label: "Home" },
  { href: "#howWork", label: "Contact us" },
  { href: "#features", label: "Found Phone" },
];

export const landingPageFooterLinks = [
  { href: "#home", label: "Home" },
  { href: "#howWork", label: "How It Works" },
  { href: "#features", label: "Features" },
];

export const socialMediaLinks = [
  { href: "https://www.linkedin.com/login", label: "linkedin", Icon: Linkedin },
  { href: "https://www.instagram.com/", label: "instagram", Icon: Instagram },
  { href: "https://www.facebook.com/login/", label: "facebook", Icon: Facebook },
  { href: "https://x.com/login", label: "twitter", Icon: Twitter },
];


// --------Works Data----------//

export const WorksData = [
  {
    Icon: <ContactsIcon />,
    Heading: "Provide target phone number",
    Description:
      "Enter the mobile number you want to locate in the provided field.",
  },
  {
    Icon: <MessagesIcon />,
    Heading: "Customize the message",
    Description:
      "Create a message that will make them approve access to their location. You can always choose the one by default. Specify sender name.",
  },
  {
    Icon: <WorksLocationIcon />,
    Heading: "Receive their precise location",
    Description:
      "Get notification as soon as GEOfinder locates the pesron on a map. View their accurate position.",
  },
];

export const navData = [
  {
    Ques: <Quesmark />,
    name: "Quick Help",
    url: "#Work",
  },
  {
    name: "Log in",
    url: "/landing",
  },
];

export const joinCompanies = [
  {
    description: "Ideal for freelancers and solopreneurs",
    tick: <Tick />,
    seat: "1 seat",
    projects: "2 projects",
    priceperseat: "$0",
    billed: "free forever",
    btnName: "Start your free trial",
  },
  {
    description: "Perfect for teams, startups, and growing businesses.",
    tick: <Tick />,
    seat: "Unlimited seats",
    projects: "Unlimited projects",
    priceperseat: "$10.80",
    billed: "per seat/month (billed annually)",
    btnName: "30-Day Free Trial",
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
    icon: <InstantLocation />,
    title: "Instant location lookups",
    description:
      "Check the location of your registered phones whenever you choose. Add up to 5 phones to your account.",
  },
  {
    icon: <Robot />,
    title: "Android & iPhone compatible",
    description:
      "Our service works with any Android or iPhone device, and takes just minutes to set up.",
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
      "Keep track of your family using our tools. Know the your children or elderly relatives are safe.",
  },
];
export const AccountData = [
  {
    icon: <Createlocation />,
    title: "Unlimited location searches",
  },
  {
    icon: <Track />,
    title: "Track up to 5 phones",
  },
  {
    icon: <Multiple />,
    title: "Multiple ways to locate a phone",
  },
  {
    icon: <Protect />,
    title: "Protect your familye",
  },
  {
    icon: <Money />,
    title: "14 day money back guarantee",
  },
  {
    icon: <Private />,
    title: "Private & confidential",
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
      "Instantly track the location of a mobile  at any time. No apps, no downloads, Locateaphone.com works with any Android or iPhone device. Locateaphone.com uses a range of different tools to find the location of a phone. Our unique phone location walkthrough process will determine the best tools to use for each situation.",
  },
];
export const navLandingData = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "How It Works",
    url: "#howWork",
  },
  {
    name: "Features",
    url: "#features",
  },
];
export const trackerdata = [
  {
    img: <SettingIcon />,
    description:
      "Cell Tracker runs on all phones and configurations, of all brands",
  },

  {
    img: <FindLocationIcon />,
    description: "Grab real-time location as precise coordinates",
  },
  {
    img: <FindMessagesIcon />,
    description:
      "Customize the message you want the recipient to recieve. Or use the one suggested by default",
  },

  {
    img: <PhoneIcon />,
    description: "Any mobile number in the world can be tracked",
  },

  {
    img: <LoopIcon />,
    title: "No installation required",
    description: "Send unlimited geo-location requests",
  },
];
