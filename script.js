const filePreview1 = (event) => {
    var preview1 = document.getElementById("source1")
    var file1 = document.getElementById("file_upload_650");
    var file2 = document.getElementById("file_upload_465");
    // console.log(preview2);
    preview1.srcset = URL.createObjectURL(event.target.files[0]);
    if(preview1.srcset){
        file2.classList.remove("hidden");
        file1.classList.add("hidden");
    }
    
}



const filePreview2 = (event) => {
    var preview2 = document.getElementById("source2");
    var file2 = document.getElementById("file_upload_465");
    preview2.srcset = URL.createObjectURL(event.target.files[0]);
    if(preview2.srcset){
        file2.classList.add("hidden");
    }
   
}