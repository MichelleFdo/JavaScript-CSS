import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import Table from "../../components/Dashboard/Table/Table.js";
import Card from "../../components/Dashboard/Card/Card.js";
import CardHeader from "../../components/Dashboard/Card/CardHeader.js";
import CardBody from "../../components/Dashboard/Card/CardBody.js";
import Button from "../../components/Dashboard//CustomButtons/Button";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Confirmed Orders</h4>
            {/* <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p> */}
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Order ID","Date and Time","Prescription","View Details"]}
              tableData={[
                ["MO2001", "2021-06-05 13:54", <Button color="primary" round onClick={handleClickOpen}>View</Button>,<Button color="secondary" round onClick={handleClickOpen}>View</Button>],
                ["MO2002", "2021-06-05 14:12", <Button color="primary" round onClick={handleClickOpen}>View</Button>,<Button color="secondary" round onClick={handleClickOpen}>View</Button>],
                ["MO2003", "2021-06-05 14:36", <Button color="primary" round onClick={handleClickOpen}>View</Button>,<Button color="secondary" round onClick={handleClickOpen}>View</Button>],
                ["MO2004", "2021-06-05 14:51", <Button color="primary" round onClick={handleClickOpen}>View</Button>,<Button color="secondary" round onClick={handleClickOpen}>View</Button>],
                ["MO2005", "2021-06-05 15:04", <Button color="primary" round onClick={handleClickOpen}>View</Button>,<Button color="secondary" round onClick={handleClickOpen}>View</Button>],
                ["MO2006", "2021-06-05 15:24", <Button color="primary" round onClick={handleClickOpen}>View</Button>,<Button color="secondary" round onClick={handleClickOpen}>View</Button>],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      
    </GridContainer>
  );
}
