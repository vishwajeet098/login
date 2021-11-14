import { useState } from "react";
import React, {  useEffect } from 'react';
import './App.css';


function App() {
  const[profile, setProfile] = useState(true);

    const [selectedImage, setSelectedImage] = useState();
  
    
    const imageChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedImage(e.target.files[0]);
      }
    };
  
    
    const removeSelectedImage = () => {
      setSelectedImage();
    };
  return (
    <>
      <main>
        {profile ? (
          <div>
          
	<div class="container " id="container ">
		
		<div class="form-container sign-in-container">
			<form>
				<h1>Login</h1>
				<div class="social-container">
					<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
					<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
					<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<a href="#">Forgot your password?</a>
				<button onClick={() => setProfile(false)}>Log In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				
				<div class="overlay-panel overlay-right">
					<h1>Hello!</h1>
					<p>Time to explore new friends nearby.</p>
					
				</div>
			</div>
		</div> 
	</div>
          </div>
        ) : (
          
          <>
        <div class="container" id="container">
      
         <>
         <article className="mainT">
         
      <div style={styles.container}>
        <input
          accept="image/*"
          type="file"
          onChange={imageChange}
        />

        {selectedImage && (
          <div style={styles.preview}>
            <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
            <article className="rembt">
            <button onClick={removeSelectedImage} style={styles.delete}>
              Remove
            </button>
            </article>
          </div>
        )}
      </div>
      </article>
    </>
    <div >
                <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col" >
                  <label>Your full name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="eg:jane"
                    autoComplete="off"
                  
                  />
                   </div>
                   
                   <div className="flex flex-col">
                  <label>Your last name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="eg:doe"
                    autoComplete="off"
                  
                  />
                   </div>
                  </article>
               <article className="md:grid grid-cols-2 gap-10"> 
                <div className="flex flex-col">
                  <label>Date of birth</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    placeholder="Date of birth"
                    autoComplete="off"
                   
                  />
                </div>
                </article>
                
                <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label> Enter Your Height in Cms  </label> 
                  <input id="height" type="number" placeholder="eg:165.5 "/>
              
                </div>
                </article>
                 
                 <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label>Enter your Religion</label>
                  <input
                    type="text"
                    id="religion"
                    placeholder="eg:hindu"
                    autoComplete="off"
                  />
                  </div>
                  </article>
         </div>
                <article className="rembt">
                
                <button onClick={() => setProfile(true)}>Log out</button>
                </article>
        </div>
      
            
			
				
				
		
          </>
        )}
      </main>
    </>
  );}
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
    },
    preview: {
      marginTop: 30,
      
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%",borderRadius:"100%" , maxHeight:200,padding:10},
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
  };
export default App;
