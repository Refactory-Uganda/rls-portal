import Navbar from '../Components/MicroComponents/Navbar/Navbar';
import style from './AddFacilitar.module.css'
const AddFacilitator = () => {
    return (
      <>
      {/* <Navbar label={'Add Facilitator'} /> */}
      <div className={style.addFacillitator}>
       <hr style={{background: '#693769', color:"#693769", borderColor: '#693769',height: '3px', width: '100%',marginTop:'3rem', marginBottom:'2rem'}}/>
      <form className={style.form}>

      <input type="text"  
          className={style.input}  
        
        placeholder="USER NAME"/>
       <input type="text" 
         className={style.input}  
       placeholder="COURSE NAME "/>
     <button className={style.button}>Save</button>
      </form>

       
   </div>
      </>
       
    );
}

export default AddFacilitator;
