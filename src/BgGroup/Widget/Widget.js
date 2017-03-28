import React from 'react';
import './Widget.css';
import { Button } from 'reactstrap';

const Widget = props => (
  <div className={`${ props.className } widget`}>
    { props.children }
  </div>
);

const DisplayButton = button => {
   if(button)
     return(
       <Button
         className={`widget-header-button ${button.icon}`}
         onClick={button.action}>
         {button.name}
       </Button>);
}

const WidgetTitle = props => {
  const displayButton = DisplayButton(props.button);

    return (
      <div className={`${props.className} widget-header`}>
          { props.title }
          { displayButton }
      </div>
    );
  }

WidgetTitle.propTypes = {
  title: React.PropTypes.string.isRequired,
  button: React.PropTypes.shape({
    name: React.PropTypes.string,
    action: React.PropTypes.func,
    icon: React.PropTypes.string
  })}


const WidgetBody = props => (
      <div className={`${ props.className } widget-body`}>
        { props.children }
      </div>
    );

export {Widget, WidgetTitle, WidgetBody};
