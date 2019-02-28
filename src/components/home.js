import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import logo from '../pexels.jpeg';

class Home extends Component {
    state = {
        posts: [],
        posters: [],
        postings: [],
        key: Math.random()*10
    }
    //lifecycle hooks to load data
    componentDidMount(){
     
        axios.get('https://test-zypher.herokuapp.com/test/test')
        .then(res => {
            console.log(res.data)
            this.setState({
                posts: res.data.authors,
                posters: res.data.themes,
                postings: res.data.category
            });
        })
        
       
            
    }
    
    // findImage = (e) => {
    //   return http://www.a-mentor.com/wp-content/uploads/2015/12/Fiction-Writing.png
    // }


 
    render (){


      const header = (<nav className="navbar navbar-expand-lg navbar-light bg-light pull-right">
     
      
        <a className="navbar-brand" href="\">Zypher</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
   
            <li class="nav-item">
        <a class="nav-link" href="#"> <i class="fa fa-search" aria-hidden="true"></i> Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-bell"></i> Notification</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-bookmark"></i> Bookmarks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="fas fa-shopping-bag"></i> Store</a>
      </li>
       
      
      
          </ul>
      
        </div>
      </nav>);
      


      const imga = {
        
        alignItems:'left',
        justifyContent:'left',
      
      }

      const imgb =  {
        // marginLeft: "8",
        // height: "50",
        // width: "50",
        // borderRadius: "90",
        // overflow: 'hidden',
marginBottom: "15px",

        borderColor: "grey",
        borderWidth: "3px",
        borderStyle: "inset",
        borderRadius: "50%"
      }
      const imgc =  {
        // marginLeft: "8",
        height: "30",
        width: "30",
        // borderRadius: "90",
        overflow: 'hidden',


        borderColor: "grey",
        borderWidth: "2px",
        borderStyle: "inset",
        borderRadius: "0%"
      }

      const imgd =  {
        // marginLeft: "8",
        // height: "30",
        // width: "30",
        // borderRadius: "90",
        overflow: 'hidden',


        borderColor: "grey",
        borderWidth: "2px",
        borderStyle: "inset",
        borderRadius: "10%"
      }


    

        //use of ternary operator to load data
        const { posts, posters, postings } = this.state

        //1

        const postList = posts.length ? (
            posts.map(post => {
              return (
               
                <div className="" key={this.state.key}>

                <div className="containerimager">
<img  style={imgb} src={post.authorImageURL} />
</div>




     
                <h6 style={{ marginTop:"23px"}} >{post.authorName}</h6>
</div>

              )
            })
          ) : (
            <div className="center">No posts to show</div>
          );







//2

          const posterList = posters.length ? (
            posters.map(post => {
              return (
               
                <div className="" key={post.objectID}>

                <div className="containerimager">
<img  style={imgb} src={post.themeImageURL} />
</div>




     
                <h6 style={{ marginTop:"23px"}} >{post.themeName}</h6>
</div>

              )
            })
          ) : (
            <div className="center">No posts to show</div>
          );




//3
          const postingsList = postings.length ? (
            postings.map(post => {
              return (
               
                <div className="" key={post.objectID}>

                <div className="container-fluid">
                <div className="row ">
                  <div className="col-12 ">

                  <h3 class="text-center">{post.categoryName}</h3>
                  <img  src={post.categoryImageURL}  alt="imager" />
            <h6>16 downloads</h6>
                  </div>
                  </div>
                  </div>





</div>

              )
            })
          ) : (
            <div className="center">No posts to show</div>
          );









    return(
        <div className="container">
        {header} 
        <h3 className="float-left">Authors</h3>
        <br></br>
        <div className="container-fluid">
                <div className="row">
                  <div className="col-1">
            <p>{postList}</p>
            </div>
                </div>
                </div>

            
                {/* <div className="container-fluid">
                <div className="row">
                  <div className="col-1">
                {postingsList}
                </div>
                </div>
                </div> */}






                <h4  style={{marginBottom:"30px"}}>Popular vacations</h4>
                <div className="container-fluid">
                <div className="row justify-content-between">
                  <div className="col ">
           
        
          
            <div class="img-container ">
            <img style={imgd} src={logo} class=" img-thumbnail " alt="imager" />
  <div class="overlay">
    <span>Explore Vacations</span>
  </div>
  </div>

            </div>

  



            <div className="col ">
           
            <div class="img-container">
            <img style={imgd} src={logo} class="img-fluid img-responsive img-thumbnail " alt="imager" />
  <div class="overlay">
    <span>Explore Vacations</span>
  </div>
  </div>
            </div>
            <div className="col ">
           
            <div class="img-container">
            <img style={imgd} src={logo} class="img-fluid img-responsive img-thumbnail " alt="imager" />
  <div class="overlay">
    <span>Explore Vacations</span>
  </div>
  </div>
           </div>
           <div className="col ">
           
           <div class="img-container">
            <img style={imgd} src={logo} class="img-fluid img-responsive img-thumbnail " alt="imager" />
  <div class="overlay">
    <span>Explore Vacations</span>
  </div>
  </div>
           </div>
           <div className="col ">
           
           <div class="img-container">
            <img style={imgd} src={logo} class="img-fluid img-responsive img-thumbnail " alt="imager" />
  <div class="overlay">
    <span>Explore Vacations</span>
  </div>
  </div>
           </div>
           <div className="col ">
           
           <div class="img-container">
            <img style={imgd} src={logo} class="img-fluid img-responsive img-thumbnail " alt="imager" />
  <div class="overlay">
    <span>Explore Vacations</span>
  </div>
  </div>
           </div>
                </div>
</div>




                <h4 style={{marginTop:"50px"}}>Explore by category</h4>
                <div className="container-fluid">
                <div className="row justify-content-between">
                  <div className="col-4 jumbotron">
            <h3>Fiction</h3>
            <img style={imgc} src="http://www.a-mentor.com/wp-content/uploads/2015/12/Fiction-Writing.png
    " class="img-fluid img-responsive  " alt="imager" />
            <h6>16 downloads</h6>
            </div>
            <div className="col-4 jumbotron">
            <h3>Non Fiction</h3>
            <img style={imgc} src="http://www.a-mentor.com/wp-content/uploads/2015/12/Fiction-Writing.png
    " class="img-fluid img-responsive  " alt="imager" />
            <h6>16 downloads</h6>
            </div>
                </div>


                <div className="row justify-content-between">
                  <div className="col-4 jumbotron">
            <h3>Exam corner</h3>
            <img style={imgc} src="http://www.a-mentor.com/wp-content/uploads/2015/12/Fiction-Writing.png
    " class="img-fluid img-responsive  " alt="imager" />
            <h6>16 downloads</h6>
            </div>
            <div className="col-4 jumbotron">
            <h3>Kids</h3>
            <img style={imgc} src="http://www.a-mentor.com/wp-content/uploads/2015/12/Fiction-Writing.png
    " class="img-fluid img-responsive  " alt="imager" />
            <h6>16 downloads</h6>
            </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-4 jumbotron">
            <h3>engineering</h3>
            <img style={imgc} src="http://www.a-mentor.com/wp-content/uploads/2015/12/Fiction-Writing.png
    " class="img-fluid img-responsive  " alt="imager" />
            <h6>16 downloads</h6>
            </div>
            <div className="col-4 jumbotron">
            <h3>Non Fiction</h3>
            <img style={imgc} src="http://www.a-mentor.com/wp-content/uploads/2015/12/Fiction-Writing.png
    " class="img-fluid img-responsive  " alt="imager" />
            <h6>16 downloads</h6>
            </div>
                </div>
                </div>

            </div>
    )
}
}
export default Home