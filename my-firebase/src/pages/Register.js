// import { useState } from "react";
// import {register} from "../firebase"


// export default function Register () { 

    
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const user = await register(email,password)
//       console.log(user)
  
//     }

//     return (
// <form
// className="max-w-xl mx-auto grid gap-y-4 py-4"
// onSubmit={handleSubmit}>

// <div>
//     <label className="block text-sm font-medium text-gray-700">
//         E-posta
//     </label>
//     <div className="mt-1">
//         <input 
//         type="email"
//         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500
//         block w-full sm:text-sm border-gray-700"
//         placeholder="you@exlample.com"
//         value={email} onChange={e => setEmail(e.target.value)}
//         />
//     </div>
// </div>

// <div>
//     <label className="block text-sm font-medium text-gray-700">
//         Parola
//     </label>
//     <div className="mt-1">
//         <input 
//         type="password"
//         className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500
//         block w-full sm:text-sm border-gray-700"
//         placeholder="******"
//         value={password} onChange={e => setPassword(e.target.value)}
//         />
//     </div>
// </div>


// <div>
// <button
// disabled={!email || !password} className="inline-flex disabled:opacity-20
// cursor-pointer items-center px-4 py-2 border
// border-transparent text-sm font-medium rounded-md shadow-sm bg-indigo-600
// hover:bg-indigo-700 text-white focus:outline-none focus:ring-2
// focus:ring-offset-2 focus:ring-indigo-500"
//  type="submit">Kayıt Ol</button>
// </div>
//  </form>
//     )
//  };















import { useState } from "react";
import { register } from "../firebase";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto grid gap-y-4 py-4 "
    >
      <div>
        <label className="block text-gray-700 text-sm font-medium">
          E-Posta Adresiniz
        </label>
        <div className="mt-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourmail@mail.com"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Parola
        </label>
        <div className="mt-1">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div>
        <button
          className="inline-flex disabled:opacity-50 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          type="submit"
          disabled={!email || !password}
        >
          Kayıt Ol
        </button>
      </div>
    </form>
  );
}