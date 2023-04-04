import React, { useState, useEffect } from "react";
import moment from "moment";
import { times } from "lodash";
import './WeeklyAgenda.css';
import { Typography } from '@mui/material';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';

const WeeklyAgenda = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    setDaysOfWeek(
      times(7, (i) =>
        moment(currentDate)
          .startOf("week")
          .add(i, "days")
          .format("DD/MM/YYYY")
      )
    );
  }, [currentDate]);

  const handlePrevWeek = () => {
    setCurrentDate(moment(currentDate).subtract(1, "week"));
  };

  const handleNextWeek = () => {
    setCurrentDate(moment(currentDate).add(1, "week"));
  };

  const handleToday = () => {
    setCurrentDate(moment());
  };

  return (
    <Card style={{ width: "40%", height: "15%", fontFamily: "sans-serif", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Button variant="solid" >
        <Typography align="center" >
          agendar
        </Typography>
      </Button>
    </Card>
  
        )
  }

export default WeeklyAgenda;