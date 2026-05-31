async function saveData(){

    let name =
    document.getElementById("name").value;
    
    let email =
    document.getElementById("email").value;
    
    if(name === "" || email === ""){
    
    document.getElementById("message").innerHTML =
    "Please fill all fields";
    
    return;
    
    }
    
    const querySnapshot =
    await getDocs(collection(db, "users"));
    
    let duplicate = false;
    
    querySnapshot.forEach((doc) => {
    
    if(doc.data().email === email){
    
    duplicate = true;
    
    }
    
    });
    
    if(duplicate){
    
    document.getElementById("message").innerHTML =
    "Duplicate Data Found!";
    
    }
    
    else{
    
    await addDoc(collection(db, "users"), {
    
    name:name,
    email:email
    
    });
    
    document.getElementById("message").innerHTML =
    "Unique Data Saved Successfully!";
    
    }
    
    document.getElementById("name").value = "";
    
    document.getElementById("email").value = "";
    
    }