// first thing is that we will import our useId hook from react.
import { useId } from "react";

const UniqueId = () => {
  // now we will use the useId hook call the hook,
  //  and important thing is that it doesn't accept any parameter.
  // and store this into a variable to use it in component.
  const id = useId();
  return (
    <div>
      {/* to check both the id's dyanmically coming or not run the application. */}
      {/* open the inspect section and in that elements section and then hover over the element  */}
      {/* so in that you will see id's like for label :- for=":r1:" */}
      {/* and for the input type email id like :- id=":r1:" */}

      {/* note this point that they are dyanmic id's so they may vary in your case,
       for that you can check inspect element section */}

      {/* we will add dyanmic id for the Email label htmlFor */}
      <label htmlFor={`${id}`}>Email</label>

      {/* and then for the email input also we can use the dyanmic id's */}
      <input type="email" id={`${id}`} />

      {/* so now what if we have the label and input again  */}
      {/* break tag to give some space between two label and input's */}
      <br />

      {/* so here is if we just make the id as same passing for the both of the input and labels */}
      {/* there is an high chances and a issue with useId hook it will consider both the labels and input same */}
      {/* so for this we will some extra paramters with the id so it will always be the unique. */}
      {/* example :- for the password label and input:- 
      before :- only `${id}` 
      after :- `${id}-password`
      */}
      {/* now you will understand that we have to make this same thing for the email label, input too. */}
      {/* before :- for the email label and input :- 
      before :- only `${id}`
      after :- `${id}-email`

      this email changes will be done by you all for your local projects,
       so that you will understand what changes are done.
      */}

      {/* we will add dyanmic id for the Email label htmlFor */}
      <label htmlFor={`${id}-password`}>Password</label>

      {/* and then for the email input also we can use the dyanmic id's */}
      <input type="password" id={`${id}-password`} />
    </div>
  );
};

export default UniqueId;
