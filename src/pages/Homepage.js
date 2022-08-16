import { CenterFocusStrong } from "@mui/icons-material";
import BasicCard from "../components/Card";
import SearchAppBar from "../components/navbar";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function HomePage() {
  return (
    <center>
    <div>
      <div>Home page</div>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
      <BasicCard header='test' title='test' subtitle = 'subtitle' text='a paragraph or sth like that tha is big'/>
   </div>
   </center>
  );
}

export default HomePage;
