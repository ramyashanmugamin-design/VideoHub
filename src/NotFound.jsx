import {Link} from 'react-router-dom'

function NotFound()
{
  const btnStyle = {
    marginLeft :'700px',
    marginTop:'20px'

  };

  return(
    <>
        <h2 className="d-flex justify-content-center align-items-center mt-5"> Error 404 - Page Not Found </h2>

        <Link className="btn btn-primary" to="/" style={btnStyle}> Back to Home </Link>
    
    </>
  );

}

export default NotFound;