import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import classes from "./HomePage.module.css"
import "../UI/Mobile.css"

class HomePage extends Component {

    render() {
    // const imgUrl2 = "https://sun9-74.userapi.com/impg/Os89_a2-ESXOQM4Nd75Ra9YXsbDx_NW-2HT22g/Q001Xopq5Vk.jpg?size=1280x817&quality=95&sign=86aaf7802eb6e4fb5d44700170d03b3a&type=album"
    const imgUrl = "https://sun9-9.userapi.com/impg/kOa-hB3uTos0sAfKYduWN0eXgalllzBTEYhfFQ/D5O2TBUv-14.jpg?size=512x577&quality=96&sign=588d2f107d060c2f18a1c67007b88b77&type=album"
    const imgAlt = "Каверы Подземки"
    // const frontAudio = "https://drive.google.com/uc?export=download&id=1uNmg51HFdA3aI84AtgWYAuM_rTnqoZyS";
    // const imgTzi = "https://sun9-40.userapi.com/impg/MISALnCzbtAXGdxwXPqulc-f9a-JzHxkZHjYnA/UcHxUh-CRM8.jpg?size=600x200&quality=96&sign=c367e03fe8e4d86e0f7fb657fd7ba0e3&type=album"
      return (
      <div className="device device-iphone-x">
      <div className="device-frame">
        <div className="device-content">

        <div>
        <Link to={"/cavers"}
         className={classes.navLink}>Слушаем!</Link>
        
        <div className= {classes.main}>
          
  <div className= {classes.article}><p >Агата Кристи</p></div>
  {/* <div className= {classes.article}><img src={imgUrl2} width={100} alt={imgAlt} />
  </div> */}
  {/* <div className= {classes.article}><audio controls src={frontAudio} type="audio/mpeg" /></div> */}
  <div className= {classes.article}><img src={imgUrl} width={100} alt={imgAlt} /></div>
 <p className={classes.textarea}>Трибьют посвящён дню рождения Глеба Самойлова</p>
  {/* <div className= {classes.article}><img  style={{ marginTop:"1em"}} src={imgTzi} width={100} alt="Каверы Подземки" /> </div> */}
</div>
      </div>
        </div>
      </div>
      <div className="device-stripe"></div>
      <div className="device-header">
        <div className="device-sensors"></div>
      </div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
      
      
    );
  }
}

  export default HomePage