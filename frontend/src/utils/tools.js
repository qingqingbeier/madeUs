export default {
  addCartAni:(e)=>{
    let top = e.target.getBoundingClientRect().top
    let left = e.target.getBoundingClientRect().left
    var img=document.createElement("img");
    img.src="http://pic.90sjimg.com/design/00/57/93/24/58facee0226cc.png"
    img.id="addCartImg"
    img.style=`position:fixed;z-index:9999;top:${top}px;left:${left}px;height:25px;width:25px;transition: all 0.4s linear;`
    document.body.appendChild(img);
    setTimeout(()=>{
      const newimg = document.getElementById("addCartImg")
      newimg.style.top = "40%"
      newimg.style.left = "100%"
    },0)

    setTimeout(()=>{
      document.body.removeChild(img)
    },400)
  }
}