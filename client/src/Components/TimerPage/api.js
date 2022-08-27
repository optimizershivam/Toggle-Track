import axios from 'axios'
export const postdata = (send) => {
  console.log(send)
  var token=localStorage.getItem("token")
  console.log(token)
  axios
    .post("https://damp-reef-46945.herokuapp.com/timer/create", send,{
      headers:{
        "authorization":token
      }
    })
    .then((res) => console.log(" data done"));
};


export function msToTime(duration) {
   var milliseconds = parseInt(duration % 1000),
     seconds = parseInt((duration / 1000) % 60),
     minutes = parseInt((duration / (1000 * 60)) % 60),
     hours = parseInt((duration / (1000 * 60 * 60)) % 24);

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

   return (
     hours + ":" + minutes + ":" + seconds + "." + Math.floor(milliseconds / 10)
   );
 }

 export const deletedata = (id) => {
  var token=localStorage.getItem("token")
  console.log(token)
  console.log(id)
  axios
    .delete(`https://damp-reef-46945.herokuapp.com/timer/delete/${id}`,{
      headers:{
        "authorization":token
      }})
    .then((res) => console.log("done"));
};
// /timer/delete
