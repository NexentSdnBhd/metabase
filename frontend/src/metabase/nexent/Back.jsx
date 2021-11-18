import Tooltip from "metabase/components/Tooltip";
import { t } from "ttag";
import PropTypes from "prop-types";
import React, { Component } from "react";

type Props = {
  classes: string,
};

class Back extends Component {
  constructor(props: Props) {
    super(props);
  }

  static propTypes = {
    classes: PropTypes.string,
  };

  goBack = e => {
    e.preventDefault();
    window.history.go(-1);
  };

  render() {
    const { classes } = this.props;

    return (
      <Tooltip key="edit-dashboard" tooltip={t`Back`}>
        <a
          data-metabase-event="Dashboard;Back"
          key="back"
          className={classes}
          onClick={this.goBack}
        >
          {this.props.children}
        </a>
      </Tooltip>
    );
  }
}

export default Back;
