const now = new Date()

export default [
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2015, 3, 14, 15, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
  

]