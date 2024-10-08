import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      {name.firstName} - {name.lastName}
      <form>
        <input
          // onChange={function demo (e){
          //     return handleChange(e);
          // }}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />
        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />
      </form>
    </div>
  );
}
