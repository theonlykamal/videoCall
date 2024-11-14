import React from 'react'

import Paper from '@mui/material/Paper';
import { Checkbox } from '@mui/material';
import { format } from 'date-fns';


const AllEvents = ({events}) => {

  let unsortedEvents = events;
  let sortedEvents = unsortedEvents.toSorted((a,b) => {
    var dateA = new Date(a.startDatetime);
    var dateB = new Date(b.startDatetime);
  
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;
    return 0;
  })

  let eventProps = [];

  for (let i = 0; i < sortedEvents.length; i++) {
    console.log("i"+sortedEvents[i]);
    
    let currEvent = sortedEvents[i];
    
    eventProps.push({done: currEvent.done});
    eventProps.push({name: currEvent.name});
    eventProps.push({datetime: currEvent.startDatetime});
    
    
    

    
  }

  console.log(eventProps)




  return (
    <div className='all-events'>
        {/* AllEvents */}

        <div className="all-events-header">
                <div className='item'>done</div>
                <div className='item'>name</div>
                <div className='item'>date</div>
              </div>

        <Paper
            elevation={10}
            sx = {{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            scrollbarWidth: "none",
            }}
        >
            {/* paper */}





            <div className='on-events-paper'>
              {/* OnPaper */}

              

              <div className="event-grid">
                
                {eventProps.map((eventProp, index) => {
                  return(
                    <div key={index}
                      className={"item " +
                        (Object.keys(eventProp))}
                    >
                      {Object.keys(eventProp) == "done" ? (<Checkbox checked = {Object.values(eventProp)[0]}/>) 
                      : (Object.keys(eventProp) == "datetime" ? (format(Object.values(eventProp),"MMM d - h:mm a")) : (Object.values(eventProp)))}
                    </div>
                  )
                })}

{eventProps.map((eventProp, index) => {
                  return(
                    <div key={index}
                      className={"item " +
                        (Object.keys(eventProp))}
                    >
                      {Object.keys(eventProp) == "done" ? (<Checkbox checked = {Object.values(eventProp)[0]}/>) 
                      : (Object.keys(eventProp) == "datetime" ? (format(Object.values(eventProp),"MMM d - h:mm a")) : (Object.values(eventProp)))}
                    </div>
                  )
                })}


{eventProps.map((eventProp, index) => {
                  return(
                    <div key={index}
                      className={"item " +
                        (Object.keys(eventProp))}
                    >
                      {Object.keys(eventProp) == "done" ? (<Checkbox checked = {Object.values(eventProp)[0]}/>) 
                      : (Object.keys(eventProp) == "datetime" ? (format(Object.values(eventProp),"MMM d - h:mm a")) : (Object.values(eventProp)))}
                    </div>
                  )
                })}




{eventProps.map((eventProp, index) => {
                  return(
                    <div key={index}
                      className={"item " +
                        (Object.keys(eventProp))}
                    >
                      {Object.keys(eventProp) == "done" ? (<Checkbox checked = {Object.values(eventProp)[0]}/>) 
                      : (Object.keys(eventProp) == "datetime" ? (format(Object.values(eventProp),"MMM d - h:mm a")) : (Object.values(eventProp)))}
                    </div>
                  )
                })}



{eventProps.map((eventProp, index) => {
                  return(
                    <div key={index}
                      className={"item " +
                        (Object.keys(eventProp))}
                    >
                      {Object.keys(eventProp) == "done" ? (<Checkbox checked = {Object.values(eventProp)[0]}/>) 
                      : (Object.keys(eventProp) == "datetime" ? (format(Object.values(eventProp),"MMM d - h:mm a")) : (Object.values(eventProp)))}
                    </div>
                  )
                })}

                  
                  

              </div>




                
            </div>
        </Paper>

    </div>
  )
}

export default AllEvents