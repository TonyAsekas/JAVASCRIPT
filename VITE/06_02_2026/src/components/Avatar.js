import './Avatar.css'

const Avatar = (username, imageURL) => {
   if(imageURL){
    return`
    <div class ="avatar">
        <img src="${imageURL}" alt="${username} avatar"/>>
    </div>
    `
   }else{
    return`
       <div class ="avatar">
        <h3>${username[0]}</h3>
    </div>
    `
   }
}
export default Avatar;