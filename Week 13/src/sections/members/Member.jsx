import React from "react";
import Card from "../../components/Card";

export default function Member({ member }) {
  return (
    <Card className="light">
      <p>{member.quote}</p>
      <div className="member">
        <div className="member-avatar">
          <img src={member.avatar} alt="Member Avatar" />
        </div>
        <div className="member-details">
          <h6>{member.name}</h6>
          <small>{member.profession}</small>
        </div>
      </div>
    </Card>
  );
}
