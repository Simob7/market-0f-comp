import {
  LiaCommentSolid,
  LiaUserAltSolid,
  LiaBuildingSolid,
} from "react-icons/lia";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";

// *******************************************************
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export const navLinks = ["articles", "gallery", "features"];

//*** */ |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export const linksOne = [
  { link: "Testimonials", icon: <LiaCommentSolid /> },

  { link: "Team Members", icon: <LiaUserAltSolid /> },

  { link: "Services", icon: <LiaBuildingSolid /> },

  { link: "Our Skills", icon: <LiaBuildingSolid /> },

  { link: "How It Works", icon: <LiaBuildingSolid /> },
];
//*** */ ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export const linksTwo = [
  { link: "Events", icon: <LiaBuildingSolid /> },

  { link: "Pricing Plans", icon: <LiaBuildingSolid /> },

  { link: "Top Videos", icon: <LiaBuildingSolid /> },

  { link: "Stats", icon: <LiaBuildingSolid /> },

  { link: "Request A Discount", icon: <LiaBuildingSolid /> },
];
//*** */ ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export const articles = [
  {
    img: "cat-01.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
  {
    img: "cat-02.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
  {
    img: "cat-03.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
  {
    img: "cat-04.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
  {
    img: "cat-05.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
  {
    img: "cat-06.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
  {
    img: "cat-07.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
  {
    img: "cat-08.jpg",
    content: {
      title: "test",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, adipisci. Error ducimus porro iusto quisquam.",
    },
  },
];
//******* */ ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export const gallery = [
  { img: "gallery-01.png", id: 1, bulletId: 1 },
  { img: "gallery-02.png", id: 2, bulletId: 2 },
  { img: "gallery-03.jpg", id: 3, bulletId: 3 },
  { img: "gallery-04.png", id: 4, bulletId: 4 },
  { img: "gallery-05.jpg", id: 5, bulletId: 5 },
  { img: "gallery-06.png", id: 6, bulletId: 6 },
  { img: "cat-04.jpg", id: 7, bulletId: 7 },
  { img: "cat-05.jpg", id: 8, bulletId: 8 },
  { img: "cat-06.jpg", id: 9, bulletId: 9 },
];
//** */ |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export const features = [
  {
    img: "cat-04.jpg",
    title: "quality",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    link: "#",
  },
  {
    img: "cat-03.jpg",
    title: "time",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    link: "#",
  },
  {
    img: "cat-01.jpg",
    title: "passion",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    link: "#",
  },
];
// ***************************************************************
export const scrollableMenu = [
  { link: "testimonials", icon: <LiaCommentSolid /> },

  { link: "Team Members", icon: <LiaUserAltSolid /> },

  { link: "Services", icon: <LiaBuildingSolid /> },

  { link: "Skills", icon: <LiaBuildingSolid /> },

  { link: "How It Works", icon: <LiaBuildingSolid /> },
  { link: "Testimonials", icon: <LiaCommentSolid /> },

  { link: "Team Members", icon: <LiaUserAltSolid /> },

  { link: "Services", icon: <LiaBuildingSolid /> },

  { link: "Our Skills", icon: <LiaBuildingSolid /> },

  { link: "How It Works", icon: <LiaBuildingSolid /> },
  { link: "Testimonials", icon: <LiaCommentSolid /> },

  { link: "Team Members", icon: <LiaUserAltSolid /> },

  { link: "Services", icon: <LiaBuildingSolid /> },

  { link: "Our Skills", icon: <LiaBuildingSolid /> },

  { link: "How It Works", icon: <LiaBuildingSolid /> },
];
//**** */ |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export const testimonials = [
  {
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500",
    name: "sara ney",
    title: "reactjs projects",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    rate: { filled: <AiFillStar />, outline: <AiOutlineStar /> },
  },
  {
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500",
    name: "sara ney",
    title: "reactjs projects",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    rate: { filled: <AiFillStar />, outline: <AiOutlineStar /> },
  },
  {
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500",
    name: "sara ney",
    title: "reactjs projects",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    rate: { filled: <AiFillStar />, outline: <AiOutlineStar /> },
  },
  {
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500",
    name: "sara ney",
    title: "reactjs projects",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    rate: { filled: <AiFillStar />, outline: <AiOutlineStar /> },
  },
  {
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500",
    name: "sara ney",
    title: "reactjs projects",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    rate: { filled: <AiFillStar />, outline: <AiOutlineStar /> },
  },
  {
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=500",
    name: "sara ney",
    title: "reactjs projects",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,repudiandae.",
    rate: { filled: <AiFillStar />, outline: <AiOutlineStar /> },
  },
];
// ********************************************************************************************************
export const teams = [
  {
    img: "assets/images/team-02.jpg",
    socials: [
      { icon: <FaFacebookF /> },
      { icon: <FaTwitter /> },
      { icon: <FaLinkedinIn /> },
      { icon: <FaInstagramSquare /> },
    ],
    info: {
      name: "jhone doe",
      desc: "a short description",
    },
  },
  {
    img: "assets/images/team-02.jpg",
    socials: [
      { icon: <FaFacebookF /> },
      { icon: <FaTwitter /> },
      { icon: <FaLinkedinIn /> },
      { icon: <FaInstagramSquare /> },
    ],
    info: {
      name: "jhone doe",
      desc: "a short description",
    },
  },
  {
    img: "assets/images/team-02.jpg",
    socials: [
      { icon: <FaFacebookF /> },
      { icon: <FaTwitter /> },
      { icon: <FaLinkedinIn /> },
      { icon: <FaInstagramSquare /> },
    ],
    info: {
      name: "jhone doe",
      desc: "a short description",
    },
  },
  {
    img: "assets/images/team-02.jpg",
    socials: [
      { icon: <FaFacebookF /> },
      { icon: <FaTwitter /> },
      { icon: <FaLinkedinIn /> },
      { icon: <FaInstagramSquare /> },
    ],
    info: {
      name: "jhone doe",
      desc: "a short description",
    },
  },
  {
    img: "assets/images/team-02.jpg",
    socials: [
      { icon: <FaFacebookF /> },
      { icon: <FaTwitter /> },
      { icon: <FaLinkedinIn /> },
      { icon: <FaInstagramSquare /> },
    ],
    info: {
      name: "jhone doe",
      desc: "a short description",
    },
  },
  {
    img: "assets/images/team-02.jpg",
    socials: [
      { icon: <FaFacebookF /> },
      { icon: <FaTwitter /> },
      { icon: <FaLinkedinIn /> },
      { icon: <FaInstagramSquare /> },
    ],
    info: {
      name: "jhone doe",
      desc: "a short description",
    },
  },
];
// **********************************************************************************
export const services = [
  {
    icon: <FaLinkedinIn />,
    title: "security",
    details: "details",
  },
  {
    icon: <FaLinkedinIn />,
    title: "security",
    details: "details",
  },
  {
    icon: <FaLinkedinIn />,
    title: "security",
    details: "details",
  },
  {
    icon: <FaLinkedinIn />,
    title: "security",
    details: "details",
  },
  {
    icon: <FaLinkedinIn />,
    title: "security",
    details: "details",
  },
  {
    icon: <FaLinkedinIn />,
    title: "security",
    details: "details",
  },
];
