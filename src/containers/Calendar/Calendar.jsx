import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/es";
moment.locale("es");

const Calendar = () => {
  function getTime(day) {
    const date = new Date(`October ${day}, 2020 20:00:00 GMT-05:00`);
    return " " + moment(date).fromNow();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const currentMonth = [
    {
      day: 1,
      // name: "JUE",
      // category: "ecommerce",
      // description: "Sesión 1",
      // time: "8:00pm GMT-5 ",
    },
    {
      day: 2,
      name: "VIE",
      category: "html",
      category: "ecommerce",
      description: "Grupo 1 - Sesión 1",
    },
    {
      day: 5,
      // name: "LUN",
      // category: "ecommerce",
      // description: "Grupo 2 - Sesión 1",
      // time: "8:00pm GMT-5 ",
    },
    {
      day: 6,
      name: "MAR",
      category: "trabajo-remoto",
      description: "Sesión 1",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 7,
      name: "MIE",
      category: "ecommerce",
      description: "Grupo 1 - Sesión 2",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 8,
      name: "JUE",
      category: "trabajo-remoto",
      description: "Sesión 2",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 9,
      name: "VIE",
      category: "ecommerce",
      description: "Grupo 1 - Sesión 3",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 12,
      // name: "LUN",
      // category: "ecommerce",
      // description: "Grupo 2 - Sesión 3",
      // time: "8:00pm GMT-5 ",
    },
    {
      day: 13,
      name: "MAR",
      category: "trabajo-remoto",
      description: "Sesión 3",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 14,
      name: "MIE",
      category: "ecommerce",
      description: "Grupo 1 - Sesión 4",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 15,
      name: "JUE",
      category: "trabajo-remoto",
      description: "Sesión 4",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 16,
      name: "VIE",
      category: "ecommerce",
      description: "Grupo 1 - Sesión 5",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 19,
      // name: "LUN",
      // category: "ecommerce",
      // description: "Grupo 2 - Sesión 5",
      // time: "8:00pm GMT-5 ",
    },
    {
      day: 20,
      name: "MAR",
      category: "ecommerce",
      description: "Grupo 2 - Sesión 1",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 21,
      name: "MIE",
      category: "trabajo-remoto",
      description: "Grupo 2 - Sesión 1",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 22,
      name: "JUE",
      category: "ecommerce",
      description: "Grupo 2 - Sesión 2",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 23,
      name: "VIE",
      category: "trabajo-remoto",
      description: "Grupo 2 - Sesión 2",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 26,
      // name: "LUN",
      // category: "javascript",
      // description: "Objetos",
      // time: "8:00pm GMT-5 ",
    },
    {
      day: 27,
      name: "MAR",
      category: "ecommerce",
      description: "Grupo 2 - Sesión 3",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 28,
      name: "MIE",
      category: "trabajo-remoto",
      description: "Grupo 2 - Sesión 3",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 29,
      name: "JUE",
      category: "ecommerce",
      description: "Grupo 2 - Sesión 4",
      time: "8:00pm GMT-5 ",
    },
    {
      day: 30,
      name: "VIE",
      category: "trabajo-remoto",
      description: "Grupo 2 - Sesión 4",
      time: "8:00pm GMT-5 ",
    },
  ];

  const newMonth = currentMonth.map((item) => {
    return {
      ...item,
      timeAgo: getTime(item.day),
    };
  });

  const [calendar, setCalendar] = useState(newMonth);

  return (
    <section className="calendar">
      <header></header>
      <div className="container">
        <div className="calendar__content">
          <div className="calendar__title">Octubre</div>
          <div className="calendar__header">LUN</div>
          <div className="calendar__header">MAR</div>
          <div className="calendar__header">MIÉ</div>
          <div className="calendar__header">JUE</div>
          <div className="calendar__header">VIE</div>
          <div className="calendar__item vacio"></div>
          <div className="calendar__item vacio"></div>
          <div className="calendar__item vacio"></div>
          {calendar.map((item, id) => {
            return (
              <div className="calendar__item" key={id}>
                <div className="item__dayGroup">
                  <p className="item__dayName">{item.name}</p>
                  <p className="item__day">{item.day}</p>
                </div>
                {item.category ? (
                  <div className="item__card">
                    <p className={`card__category ${item.category}`}>
                      {item.category}
                    </p>
                    <p className="card__description">{item.description}</p>
                    <p className="card__time">{item.time}</p>
                    <p>
                      <i className="far fa-clock"> </i>
                      {item.timeAgo}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Calendar;
