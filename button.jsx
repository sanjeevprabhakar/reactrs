export const CustomButton = (props) => {
    console.log(props.user);
  function handleButtonClick() {
    
    props.onclick(props.user);
   }
    return <button onClick={handleButtonClick}> {props.btnname}  </button>

}