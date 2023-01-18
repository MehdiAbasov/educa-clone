import React from 'react'

import NewsItem from '../News.json'
import EventsGridItem from './EventsGridItem'

const EventsGrid = () => {
  return (
    <div className='events-grid'>
      <div className="row">
        {NewsItem.map((item) => (
              <EventsGridItem image={item.image} text={item.text} adress={item.adress} date={item.date} title={item.title} />
            )
        )}
      </div>
    </div>
  )
}

export default EventsGrid