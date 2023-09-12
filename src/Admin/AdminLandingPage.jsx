import Card from 'react-bootstrap/Card';
import {FaEllipsisV} from 'react-icons/fa'
import styles from "./AdminLandingPage.module.css"
function Admin(){
    return(
        <>
        <div className={styles.AdminDashBoard}>
            <div className="container"> 
   <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
            <Card className={styles.card} style={{ width: '25rem', height:'15rem' }}>
      <Card.Body>
      <button className={styles.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaEllipsisV />
  </button>
        <Card.Title>
            <img src='/images/python-removebg-preview.png'></img>
            <Card.Subtitle className={styles.subtitle}>PYTHON V3</Card.Subtitle>
        </Card.Title>
        <Card.Text className={styles.cardText}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button>
        <Card.Link href="#">Card Link</Card.Link>
        </button>
        <button>
        <Card.Link href="#">Another Link</Card.Link>
        </button>
      </Card.Body>
    </Card>
    </div>
   <div className="col-xl-6 col-lg-6 col-md-6">
    <Card className={styles.card} style={{ width: '25rem', height:'15rem' }}>
      <Card.Body>
      <button className={styles.dropdown} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <FaEllipsisV />
  </button>
        <Card.Title>
            <img src='/images/python-removebg-preview.png'></img>
            <Card.Subtitle className={styles.subtitle}>PYTHON V3</Card.Subtitle>
        </Card.Title>
        <Card.Text className={styles.cardText}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <button>
        <Card.Link href="#">Card Link</Card.Link>
        </button>
        <button>
        <Card.Link href="#">Another Link</Card.Link>
        </button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
            
        </div>

        </>
    )
}
export default Admin