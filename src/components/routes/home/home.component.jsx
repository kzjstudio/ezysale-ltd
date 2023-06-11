import Directory from "../../directory/directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: "1",
      title: "Diffusers",
      imageUrl:
        "https://thesatinscent.com/wp-content/uploads/2021/05/Diffuser.jpg",
    },
    {
      id: "2",
      title: "Cell phone accessories",
      imageUrl:
        "https://img.buzzfeed.com/buzzfeed-static/static/2021-07/27/2/campaign_images/d89e490dc865/20-cell-phone-accessories-on-amazon-that-reviewer-2-14703-1627352245-34_dblbig.jpg?resize=1200:*",
    },
    {
      id: "3",
      title: "Sports wear",
      imageUrl:
        "https://images.asos-media.com/groups/new-balance-members-club-lounge-set-in-green-exclusive-to-asos/94481-group-1/?$n_480w$&wid=476&fit=constrain",
    },
    {
      id: "4",
      title: "House items",
      imageUrl:
        "https://www.infotrack.com/wp-content/uploads/2022/10/best-gadgets-for-legal-professionals.jpg",
    },
    {
      id: "5",
      title: "Bluetooth speakers",
      imageUrl: "https://m.media-amazon.com/images/I/8193DNNjZFS.jpg",
    },
    {
      id: "4",
      title: "Office supplies",
      imageUrl:
        "https://www.careeraddict.com/uploads/article/60910/workplace-cool-office-gadgets.png",
    },
  ];

  return <Directory categories={categories} />;
};

export default Home;
