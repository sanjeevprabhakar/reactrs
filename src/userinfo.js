export const Userinfo = (props) => {
  console.log("hi",props.users)
    return <table style={{width:"100%",height:"300px"}}border="1px"> { props.users.map((user,key) => {
         <> <tr key = {key}> <td>{user.firstName} </td> </tr>
         <tr key = {key}> <td>{user.lastName}  </td>  </tr>
         <tr key = {key}> <td>{user.age} </td> </tr>
         <tr key = {key}> <td>{user.email} </td> </tr>
         <tr key = {key}> <td>{user.password} </td> </tr> </>
    })}</table>;
}