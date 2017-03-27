import React from 'react';

import { Widget, WidgetTitle, WidgetBody } from '../../Widget/Widget';

const AboutUs = props => (
  <Widget>
    <WidgetTitle title="About Us" />
    <WidgetBody>
      { props.info }
    </WidgetBody>
  </Widget>
);

AboutUs.propTypes = {
  info: React.PropTypes.string.isRequired,
};

export default AboutUs;
