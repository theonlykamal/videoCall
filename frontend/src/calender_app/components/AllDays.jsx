import React from 'react'
import Paper from '@mui/material/Paper';
import { eachDayOfInterval, endOfYear, format, startOfToday, startOfYear } from 'date-fns';

const AllDays = () => {

    let date = startOfToday();
    let yearStart = startOfYear(date);
    let yearEnd = endOfYear(date);

    let allDays = eachDayOfInterval({
        start: yearStart,
        end: yearEnd
    });

  return (
    <div className='all-days'>
        AllDays

        <Paper
            elevation={10}
            sx = {{
            flex: 1,
            display: "flex",
            flexDirection: "column"
            }}
        >
            paper

            <div className='on-days-paper'>
                OnPaper

                <div className='all-days-list'>
                    List

                    {allDays.map((day) => {
                        return(
                            <div className='day'>
                                {format(day,"dd MMM")}
                            </div>
                        )
                    })}



                </div>
            </div>
        </Paper>
    </div>
  )
}

export default AllDays