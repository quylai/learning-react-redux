import React from "react";

// function NewUser({username, email, password}) {

//   changeHandler = (e) => {
//     this.props({ [e.target.name]: e.target.value })
//   }

//   return(
//     <div>
//       <label>username</label>
//       <input
//         type="text"
//         value={username} 
//         onChange={this.changeHandler}
//       />
//       <label>email</label>
//       <input
//         type="email"
//         value={email} 
//         onChange={this.changeHandler}
//       />
//       <label>password</label>
//       <input
//         type="password"
//         value={password} 
//         onChange={this.changeHandler}
//       />
//     </div>
//   );
// }  
// export default NewUser;


import React from "react";
import "./style.css";

function NewUser({username, email, password, handleInputChange, handleFormSubmit}) {
  return(
    <form className="new-user-form">
      <div className="form-group">

        <label>Username:</label>
        <input
          value={username}
          onChange={handleInputChange}
          name="username"
          type="text"
          className="form-control"
        />

        <label>Email:</label>
        <input
          value={email}
          onChange={handleInputChange}
          name="email"
          type="email"
          className="form-control"
        />

        <label>Password:</label>
        <input
          value={password}
          onChange={handleInputChange}
          name="password"
          type="password"
          className="form-control"
        />

        <button type="submit" onClick={handleFormSubmit} className="btn btn-success">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewUser;
