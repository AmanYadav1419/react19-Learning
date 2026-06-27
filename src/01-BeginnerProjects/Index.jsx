// this file is act like a wrapper for all the projects will be imported in this component.

import Counter from "./001-CounterProject/Counter"

// so that it is easy to manage at global level making the code more easy to understand.
const BeginnerProjectsWrapper = () => {
  return (
    <div>
        {/* importing our first project that is counter application */}
        <Counter />
    </div>
  )
}

export default BeginnerProjectsWrapper