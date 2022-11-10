import { StarBorder, Drafts, Send, MoveToInbox } from "@mui/icons-material";

// import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'

// DRAWER.JS

const menu = [
  "1 HOME",
  "1.1 INDEX",
  "2 SERVICES",
  "2.1 SOFTWARE DEVELOPMENT",
  "2.2 ECOMMERCE",
  "2.3 WEBSITE DESIGN",
  "2.4 WEB GAME",
  "2.5 VIRTUAL EVENT",
  "2.6 ONLINE SHOWROOW",
  "2.7 3D VISUALIZATION",
  "2.8 METAVERSE",
  "3 ABOUT",
  "3.1 INTRO",
  "3.2 HOW WE DO THIS",
  "3.3 EXPERTISE AREAS",
  "3.4 OUR TEAMS",
  "3.5 CLIENTS",
  "4 CONTACT",
];

const lists = [
  {
    key: "1 HOME",
    label: "1 HOME",
    icon: MoveToInbox,
    pathname: "/",
    items: [
      {
        key: "1.1 INDEX",
        label: "1.1 INDEX",
        icon: StarBorder,
        pathname: "/",
      },
    ],
  },
  {
    key: "2 SERVICES",
    label: "2 SERVICES",
    icon: Drafts,
    pathname: "/services",
    items: [
      {
        key: "2.1   SOFTWARE DEVELOPMENT",
        label: "2.1   SOFTWARE DEVELOPMENT",
        icon: Send,
        pathname: "/services",
      },
      {
        key: "2.2 ECOMMERCE",
        label: "2.2 ECOMMERCE",
        icon: Send,
        pathname: "/services",
      },
    ],
  },
];
// import _uniqueId from 'lodash/uniqueId'

// const [id] = useState(_uniqueId('tvpanel-'))
// GAME.JS
const panelObj = [
  {
    name: "Object002",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",
    videoTexture:
      "/video/1.SingaporeFoodFestival2022,bySingaporeTourismBoard.mp4",
  },
  {
    name: "Object003",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",
    videoTexture:
      "/video/2.VirtualPhDOpenHouse,bySingaporeManagementUniversity.mp4",
  },
  {
    name: "Object004",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",
    videoTexture:
      "/video/3.IloominationVirtualShowroom,byNEAClean&GreenSingapore.mp4",
  },
  {
    name: "Object005",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",
    videoTexture: "/video/4.BYDVirtualCarShowroom,bySTEngineering.mp4",
  },
  {
    name: "Object006",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",
    videoTexture:
      "/video/5.CuriographyVirtualExhibition,bySingaporeAssociationforMentalHealth.mp4",
  },
  {
    name: "Object007",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",
    videoTexture:
      "/video/6.EnvironmentalAwarenessCampaign,byProcter&Gamble.mp4",
  },
  {
    name: "Object008",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",
    videoTexture:
      "/video/7.StarPropertyAwards2022VirtualShowcase,byStarMediaGroup.mp4",
  },
  {
    name: "Object009",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",
    videoTexture: "/video/8.SabahVirtualTravelFair,bySabahTourismBoard.mp4",
  },
  {
    name: "Object010",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",
    videoTexture:
      "/video/9.VirtualExhibition&InternationalConference,byUniversityScienceMalaysia.mp4",
  },
  {
    name: "Object011",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",
    videoTexture: "/video/10.VirtualSalesLobbybydr.MCTbyKevolve.mp4",
  },
  {
    name: "Object012",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",
    videoTexture:
      "/video/11.VirtualStationeryStore,byNavneetEducationLimited.mp4",
  },
  {
    name: "Object013",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",

    videoTexture: "/video/12.EdenVirtualWorld,EdenlogyPteLtd.mp4",
  },
  {
    name: "Object014",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",

    videoTexture:
      "/video/13.KualaLumpurVirtualPhotographyFestival,byPCPPublications.mp4",
  },
  {
    name: "Object015",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",

    videoTexture:
      "/video/14.VirtualAngelicaShowUnite-Launching,byJohorLand.mp4",
  },
  {
    name: "Object016",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",

    videoTexture:
      "/video/15.HorizonSquareVirtualShowcase,byTopHillsRealty(M)Sdn.Bhd..mp4",
  },
  {
    name: "Object017",
    bloom: true,
    textureFlipY: true,
    color: "#ffffff",
    textureRotation: 180,
    texture: "/img/test.png",

    videoTexture: "/video/16.VirtualBazaar(Localised),ByTheRefectory.mp4",
  },
  {
    name: "Object018",
    bloom: true,
    textureFlipY: false,
    color: "#ffffff",
    textureRotation: 360,
    texture: "/img/test.png",

    videoTexture: "/video/17.VirtualBistroBar,byMemeBistroBar.mp4",
  },
];

// GAME.JS
const panelFrame = [
  {
    name: "Box2131639805",
    bloom: true,
    color: "#ffffff",
  },
  {
    name: "Box2131639774",
    bloom: true,
    color: "#ffffff",
  },
  {
    name: "Box2131639774",
    bloom: true,
    color: "#ffffff",
  },
];

export { panelObj, panelFrame, lists };