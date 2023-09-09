import ButtonAddContent from "../Components/AddCourseContentButton";
import style from './AddCourseContentDraft.module.css'
const AddCourseContentDraft = () => {
    return (
        <>
             <div className={style.addCourseContent}>
         <div className={style.header}>
            <h3>ADD COURSE CONTENT</h3>
            </div> 
            <div className={style.content}>
              <ButtonAddContent backgroundColor="white" borderColor="rgb(88,197,200)" contentColor="black" label="CONTENT"/>  
              <ButtonAddContent backgroundColor="#693769ff" borderColor="rgba (105, 5" contentColor="white" label="DETAILS"/>  
              <ButtonAddContent backgroundColor="white" borderColor="rgb(88,197,200)" contentColor="black" label="ENTROLLED"/>  
            </div>
            <div className={style.content}>
              <ButtonAddContent backgroundColor="rgb(88,197,200)" borderColor="rgb(88,197,200)" contentColor="black" label="CONTENT"/>  
              <ButtonAddContent backgroundColor="white" borderColor="rgb(88,197,200)" contentColor="black" label="ADDED"/>  
              <ButtonAddContent backgroundColor="black" borderColor="black" contentColor="white" label="ADD"/>  
            </div>

            <div className={style.content}>
              <ButtonAddContent backgroundColor="white" borderColor="white" contentColor="red" label="CANCEL"/>  
              <ButtonAddContent backgroundColor="#693769ff" borderColor="white" contentColor="white" label="DELETE"/>  
              
            </div>
            <div>
             <div className={style.content__flex}>
              <div>
             <div className={style.content__top}>
             <ButtonAddContent backgroundColor="black" borderColor="black" contentColor="white" label="Text"/>
             
              <ButtonAddContent backgroundColor="white" borderColor="#693769ff" contentColor="#693769ff" label="Video"/>     <ButtonAddContent backgroundColor="white" borderColor="#693769ff" contentColor="#693769ff" label="Image"/>     <ButtonAddContent backgroundColor="white" borderColor="#693769ff" contentColor="#693769ff" label="Slides"/> 
              </div> 
              <div>
              
              <ButtonAddContent backgroundColor="rgb(88,197,200) " borderColor="rgb(88,197,200) " contentColor="#693769ff" label="SAVE"/> 
              <ButtonAddContent backgroundColor="#693760fF" borderColor="white" contentColor="white" label="RESET"/>    
              </div>


              </div>
              <p className={style.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatem dolore assumenda praesentium distinctio iusto itaque sint corporis placeat! Voluptate officia consequuntur esse sed eos laudantium odio ratione ducimus laboriosam dicta velit enim facilis hic doloremque, quo nesciunt mollitia maxime neque repudiandae commodi aliquam! Mollitia expedita esse dolorum sapiente vero inventore dolorem officiis, cum fugit quos aperiam incidunt, ea sint molestias! Expedita aliquid impedit odio fugit. Quo eligendi nesciunt voluptatibus aperiam iusto velit ipsa maxime doloremque ea est hic necessitatibus veritatis, voluptate, earum totam quaerat illo at alias similique dolor nulla? Expedita, dolores. Quia laborum, optio rem veniam reiciendis sit!</p>
             </div>
            </div>
           
         </div>
        </>
    );
}

export default AddCourseContentDraft;
