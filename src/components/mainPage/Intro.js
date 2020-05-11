import React from "react";
import ContentPanel from "./shared/ContentPanel";
import { Link } from "gatsby";
import Paragraph from "./shared/Paragraph";

const intro = props => {
  return (
    <ContentPanel id="intro" title="Intro" {...props}>
      <Paragraph>
        Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam
        facilisis ante interdum congue. Integer mollis, nisl amet convallis,
        porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi
        nec lacinia. Nam maximus erat id euismod egestas. By the way, check out
        my <Link to="/work">awesome work</Link>.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus
        rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
        porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc
        ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit
        amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla
        in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. In non lorem sit
        amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
        vehicula.
      </Paragraph>
    </ContentPanel>
  );
};

export default intro;
