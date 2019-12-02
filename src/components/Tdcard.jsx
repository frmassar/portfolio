import React, {useState} from 'react'
import { useSpring, animated } from 'react-spring'
import '../css/App.css'
// import { card } from './card'

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Tdcard({card}) {
  const [propsAnim, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 }}))
  const [ hover, setHover ] = useState(false)
  const handleHover = () => {
    setHover(!hover)
}

const showDescr = () => {
    if(hover){
  return (

    <div>
    <div className="titresite">
    {card.titre}
    <p>by François Massart</p>
</div>
    
    <animated.div
      class="cardtrois"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: propsAnim.xys.interpolate(trans),
        backgroundImage:'url('+card.image+')',backgroundSize: "cover", opacity:0.5 }}
        
    />
    </div>
    
  )
}else{ 
  return <animated.div
  class="cardtrois"
  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
  onMouseLeave={() => set({ xys: [0, 0, 1] })}
  style={{ transform: propsAnim.xys.interpolate(trans),
    backgroundImage:'url('+card.image+')',backgroundSize: "cover" }}
    
/>
}
}

return (
<a href={card.lien}>        
  <div className="cardtrois"
      onMouseEnter={() => handleHover()} 
      onMouseLeave={() => handleHover()}
  >
      {showDescr()}
  </div>
</a>    
)
}

export default Tdcard