import React from 'react'


import Paper from '@mui/material/Paper';
import { Checkbox , Avatar ,Chip } from '@mui/material';
import { format } from 'date-fns';



const AllEvents = ({onDone, events}) => {

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

    
    let currEvent = sortedEvents[i];
    
    eventProps.push({id: currEvent.id, done: currEvent.done});
    eventProps.push({id: currEvent.id, name: currEvent.name});
    eventProps.push({id: currEvent.id, datetime: currEvent.startDatetime});
  
  }

  function checkboxHandler(e) {
    const _id = e.target.name
    onDone(_id)

  }






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
                    <div 
                      name={Object.values(eventProp)[0]}
                      className={"item " +
                        (Object.keys(eventProp)[1])}
                      
                    >
                      {Object.keys(eventProp)[1] == "done" 
                        ? (<Checkbox 
                            checked = {Object.values(eventProp)[1]} 
                            onChange={checkboxHandler}
                            name = {Object.values(eventProp)[0]}
                          />) 
                          : (Object.keys(eventProp)[1] == "datetime" 
                            ? (<Chip
                              
                              label={format(Object.values(eventProp)[1],"MMM d - h:mm a") }
                              variant="outlined"
                            /> ) 
                              : (Object.values(eventProp)[1]))}
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