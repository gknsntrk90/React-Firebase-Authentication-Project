
// import { login, reAuth } from "../../firebase";
// import LoginForm from "../LoginForm";

// export default function ReAuthModal({close}) {

//   const handleSubmit = async (e, email, password) => {
//     e.preventDefault()
//     // const user = await login(email, password)
//     const result = await reAuth(password)
//     close()
//   }

  
//   return (
//     <LoginForm handleSubmit={handleSubmit} noEmail={true}/>
//   );
// }




import { login, reAuth } from "../../firebase";
import LoginForm from "../LoginForm";

export default function ReAuthModal({ close }) {
  const handleSubmit = async (e, password) => {
    e.preventDefault();

   await reAuth(password);
    close();
  };
  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} noEmail={true} />
    </div>
  );
}