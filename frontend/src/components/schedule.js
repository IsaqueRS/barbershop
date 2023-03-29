import React, { useState, useEffect } from "react";
import { Grid, Header, Button } from "semantic-ui-react";
import moment from "moment";
import { times } from "lodash";
import './WeeklyAgenda.css';

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
    <div className="weekly-agenda">
      <Header as="h1">
        Agenda Semanal - {moment(currentDate).format("DD/MM/YYYY")}{" "}
        <Button.Group floated="right">
          <Button onClick={handlePrevWeek}>Anterior</Button>
          <Button onClick={handleToday}>Hoje</Button>
          <Button onClick={handleNextWeek}>Próxima</Button>
        </Button.Group>
      </Header>
      <Grid className="agenda-table" celled>
        <Grid.Row>
          <Grid.Column width={3} className="agenda-cell"></Grid.Column>
          {daysOfWeek.map((day, i) => (
            <Grid.Column key={i} width={2} className="agenda-cell agenda-header">
              {day}
            </Grid.Column>
          ))}
        </Grid.Row>
        {times(24, (i) => (
          <Grid.Row key={i}>
            <Grid.Column width={3} textAlign="center" className="agenda-cell agenda-header">
              {`${i}:00`}
            </Grid.Column>
            {daysOfWeek.map((day, j) => (
              <Grid.Column key={`${i}-${j}`} width={2} className="agenda-cell">
                {events &&
                  events.map((event) => {
                    const start = moment(event.start);
                    const end = moment(event.end);
                    const dayOfWeek = moment(day, "DD/MM/YYYY");
                    if (
                      start.isSameOrAfter(dayOfWeek, "day") &&
                      end.isSameOrBefore(dayOfWeek, "day") &&
                      start.hours() <= i &&
                      end.hours() >= i + 2
                    ) {
                      return (
                        <div key={event.title} className="agenda-event">
                          <Header as="h5" className="agenda-event-title">
                            {event.title}
                          </Header>
                          <p className="agenda-event-time">{`${start.format(
                            "HH:mm"
                          )} - ${end.format("HH:mm")}`}</p>
                        </div>
                      );
                    }
                    return null;
                  })}
              </Grid.Column>
            ))}
          </Grid.Row>
        ))}
      </Grid>
    </div>
  );
};

export default WeeklyAgenda;