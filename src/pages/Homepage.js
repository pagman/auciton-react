import { CenterFocusStrong } from "@mui/icons-material";
import BasicCard from "../components/Card";
import SearchAppBar from "../components/navbar";

const DUMMY_DATA = [
  {
    key:1,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },{
    key:2,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:3,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:4,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  },
  {
    key:5,
    header: "m1",
    title: "test",
    subtitle: "Meetupstreet 5, 12345 Meetup City",
    text: "a paragraph or sth like that tha is big",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg'
  }
];

function HomePage() {
  return (
    <center>
      <div>
        <div>Home page</div>
          {DUMMY_DATA.map((item) => (
            <BasicCard
              key={item.key}
              header={item.header}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              text={item.text}
            />
          ))}
      </div>
    </center>
  );
}

export default HomePage;
