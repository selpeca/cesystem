import{u as f,r as h,j as a,a as s,H as v}from"./app.e17e403d.js";import{G as g,P as N}from"./PrimaryButton.bbed054c.js";import{T as m,I as n}from"./TextInput.ace313a9.js";import{I as l}from"./InputLabel.5b5b6f4b.js";import"./ApplicationLogo.a563503d.js";function y({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:t,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const o=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.update"))},children:[a("div",{children:[s(l,{forInput:"email",value:"Email"}),s(m,{type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:o}),s(n,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password",value:"Password"}),s(m,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:o}),s(n,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(l,{forInput:"password_confirmation",value:"Confirm Password"}),s(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:o}),s(n,{message:t.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{y as default};
