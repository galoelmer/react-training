import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="ui teal large floating message feed">
      <div className="header">Notifications</div>
      {notifications &&
        notifications.map((note) => {
          return (
            <div className="event" key={note.id}>
              <div className="content">
                <div className="summary">
                  <a href="#!" className="user">
                    {note.user}
                  </a>
                  <span> {note.content}</span>
                  <div className="date">
                    {moment(note.time.toDate()).fromNow()}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Notifications;
