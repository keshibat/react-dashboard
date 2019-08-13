/*!

=========================================================
* Material Dashboard PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import LocalGasStation from "@material-ui/icons/LocalGasStation";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import BusinessCenter from "@material-ui/icons/BusinessCenter";


import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// other components
import GoogleMaps from "../Maps/GoogleMaps";
import Tables from "../Tables/ReactTables";


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";


class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>local_gas_station</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Last Fill Up:</p>
                <h3 className={classes.cardTitle}>
                  30 L
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.chart}>
                  <DateRange />
                  Thursday 15th Aug 3pm
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>local_gas_station</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Estimated fuel left:</p>
                <h3 className={classes.cardTitle}>10 L</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.chart}>
                  <div>
                    <DirectionsCar />
                    Traveled: 200km
                  </div>
                  <div>
                    <LocalGasStation />
                     Fuel Economy: 10L/100km
                  </div>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>directions_car</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Business Travel</p>
                <h3 className={classes.cardTitle}>75 %</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.chart}>
                  <BusinessCenter />

                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="danger">
                  <Icon>build</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Diagnostic issues</p>
                <h4 className={classes.cardTitle}>Power Steering</h4>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    See a mechanic
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>


        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={12} md={12}>
                    <GoogleMaps />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>


        <GridContainer>
          <GridItem xs={12}>
            <Card>
              <CardHeader color="success" icon>
              </CardHeader>
              <CardBody>
                <GridContainer justify="space-between">
                  <GridItem xs={12} sm={12} md={12}>
                    <Tables />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>

      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
