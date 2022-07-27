import React, { FunctionComponent } from 'react';
import { format } from 'date-fns';

interface CalendarCardProps {
  datetime: Date;
}

export const CalendarCard: FunctionComponent<CalendarCardProps> = ({ datetime }) => (
  <div className="min-w-32 bg-white min-h-48 p-3 mb-4 font-medium">
    <div className="w-32 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
      <div className="block rounded-t overflow-hidden  text-center ">
        <div className="bg-rose-500 text-white py-1">{format(datetime, 'MMMM')}</div>
        <div className="pt-1 border-l border-r border-white bg-white">
          <span className="text-5xl font-bold leading-tight">{format(datetime, 'dd')}</span>
        </div>
        <div className="border-l border-r border-b rounded-b-lg text-center border-white bg-white -pt-2 -mb-1">
          <span className="text-sm">{format(datetime, 'EEEE')}</span>
        </div>
        <div className="pb-2 border-l border-r border-b rounded-b-lg text-center border-white bg-white">
          <span className="text-xs leading-normal">{format(datetime, 'yyyy qqq')}</span>
        </div>
      </div>
    </div>
  </div>
);
