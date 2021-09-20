import dataFeature from "./data/dataFeature";
import dataInFocus from "./data/dataInFocus";
import dataVideos from "./data/dataVideos";
import dataLast from "./data/dataLast";
import Section from "./SectionComponent";

const Sections = () => {
  return (
    <>
      <Section
        data={dataFeature}
        title={"The latest from Ableton"}
        menuLinks={["All posts", "Artists", "News", "Downloads"]}
      />
      <Section
        data={dataInFocus}
        title={"Ableton in focus"}
        menuLinks={["Discover more"]}
      />
      <Section
        data={dataVideos}
        title={"One Thing Video"}
        menuLinks={["See all videos"]}
      />
      <Section
        data={dataLast}
        title={"Videos and features from the Loop summit"}
        menuLinks={["See more"]}
      />
    </>
  );
};

export default Sections;
