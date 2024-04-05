import './Button.css';

const defaultOnClick = () => {
   console.log("Button click");
}

function Button(prop) {
   const onClickHandler = prop.custumFunc || defaultOnClick;
   
   return (
       <button className={prop.name} onClick={onClickHandler}>
           {prop.children}
       </button>
   );
}

export default Button;