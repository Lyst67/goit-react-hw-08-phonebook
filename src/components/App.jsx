import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/Home/Home";
import NotFound from "pages/NotFound";
import { RegisterForm } from "pages/RegisterForm/RegisterForm";
import { LogInForm } from "pages/LogInForm/LogInForm";
import { Layout } from "./Layout/Layout";
import { Contacts } from "pages/Contacts/Contacts";
import { AddForm } from "./AddForm/AddForm";

export const App = () => {
   return (
     <div>
       <Routes>
         <Route path="/" element={<Layout/>}> 
         <Route index element={<HomePage />} />
           <Route path="/contacts" element={<Contacts />}>
              <Route path="add" element={<AddForm />} />
           </Route>
         <Route path="/register" element={<RegisterForm />} />
         <Route path="/login" element={<LogInForm />} />
         <Route path="*" element={<NotFound/>}/>  
         </Route>
        
       </Routes>
      
    </div>
  );
}
  





