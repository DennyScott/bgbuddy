import React from 'react';
import { Table, Input } from 'reactstrap';
import { WidgetTitle, WidgetBody, Widget } from '../../../components/widget/Widget';
import './Vote.css';

const ScheduleTable = (schedule, index) => (
  <div key={index}>
    <span>{schedule.month}</span>
    <Table className="voting-card" striped>
      <thead>
        <tr>
          <th scope="row"></th>
          {schedule.days.map( (day, i) => {
            return day.times.map( (time, timeIndex) => (
              <th key={i + timeIndex}>{day.name}</th>

          ))})}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          {schedule.days.map( (day, i) => {
            return day.times.map( (time, index) => (
              <td key={i + index}>
                <span>{time.value}</span>
              </td>

            ))}
          )}
        </tr>
        <tr>
          <th scope="row">Travis</th>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
        </tr>
        <tr>
          <th scope="row">Denny</th>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
          <td><Input className="voting-checkbox" type="checkbox" /></td>
        </tr>
      </tbody>
    </Table>
  </div>
)

const ScheduleVote = props => {
  return (

    <Widget>
      <WidgetTitle title="Vote: Select your day" />
      <WidgetBody>
        {props.schedule.map( (month, i) => (
          ScheduleTable(month, i)
        ))}
      </WidgetBody>
    </Widget>
  )
}

ScheduleVote.propTypes = {
  schedule: React.PropTypes.array.isRequired,
}



export default ScheduleVote;
