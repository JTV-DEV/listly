function Form() {
  
  return(
    <>
      <label htmlFor='input-name'>
        Grocery Name:
      <input id='input-name' type='text' placeholder="Enter Grocery" />
      </label>
      <label htmlFor='input-quantity'>
        Enter Quantity:
      <input id='input-quantity' type='number' min='0' placeholder="Enter Quantity" />
      </label>
      <button onClick={ e => console.log('clicked')} > Add </button>
    </>
  );
}
export default Form;