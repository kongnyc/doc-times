const now = new Date()

// eslint-disable-next-line import/no-anonymous-default-export
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
    title: 'Flu vaccine',
    start: new Date(2022, 3, 2, 15, 30, 0),
    end: new Date(2022, 3, 2, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Covid vaccine',
    start: new Date(2022, 2, 10, 16, 30, 0),
    end: new Date(2022, 2, 10, 17, 0, 0),
  },
  {
    id: 18,
    title: 'Annual Physical Exam',
    start: new Date(2022, 3, 6, 16, 30, 0),
    end: new Date(2022, 3, 6, 17, 0, 0),
  },

]