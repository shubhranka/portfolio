// Index for black circle
let ind = 0;

// Content
let content = {
    "education":[
        {
        "title":"B.TECH - COMPUTER SCIENCE",
        "sub_title":"Samrat Ashok Technological Institute | 2017 - 2021",
        "content":[
            "Selected - to build an admin portal from scratch",
            "I have also taken courses in Data Structures, Algorithms, Operating Systems, and Computer Networks.",
            "President of Programming Society - The Codians"
        ]
    }
    ],
    "work_history":[
        {
            "title":"FORWARD DEPLOYMENT ENGINEER",
            "sub_title":"AVRL| Jan 2022 -July 2022",
            "content":[
                "Created web-based promotional collaterals for different campaigns",
                "Translated requirements into polished, high-level designs",
                "Building automated bots for customer requirements"
            ]
        },
        {
            "title":"ASSOCIATE SOFTWARE DEVELOPER",
            "sub_title":"IMPETUS | Aug 2021 - Jan 2022",
            "content":[
                "Conduct day-to-day project coordination, planning, and implementation across multiple teams",
                "Managed complex projects from start to finish",
                "Created functional and technical application documents"
            ]
        }
    ],
    "projects":[
        {
            "title":"DATA STORE",
            "content":[
                "Built a file-based key-value data store, a source project",
                "Can be used for debugging faster or as a real secure datastore",
                "Built using Java for security ."
            ]
        },
        {
            "title":"TEST PORTAL",
            "content":[
                "Involved in high-level design, handling technical designs and complex application features.",
                "Worked as part of back-end development team in project using Node.Js and MySQL database."
            ]
        }
    ],
    "skills":[
        "C++","C","Python","Java","HTML","CSS","Javascript","Node.js","React","React Native","Flask","Data Structures"
    ],
    "hobbies":[
        "Mathematics","Chess","Music","Arts","Automating daily tasks","Soccer","Gaming"
    ],
    "achievements":[
        {"content":[
            "SHORTLISTED FOR AGRI - HACKATHON RURAL INDIA.","SHORLISTED FOR SIH - SMART INDIA HACKATHON.","NATIONAL CHESS PLAYER.","TOP 250 IN INDIA'S SUPER BRAIN CONTEST.","PRESIDENT OF COLLEDGE CLUB - THE CODIANS.","2ND RANK IN TECHFEST INDIA"
        ]}
    ]
}

content = JSON.parse(JSON.stringify(content))

// Sounds
// ----------------------------------------------------------------------------
const sounds = []
const enterSound = new Audio(`/assets/sounds/Mechanical-Keyboard-single-button-presses-1-www.FesliyanStudios.com.mp3`)
for(let i=2; i<=10; i++) {
    sounds.push(new Audio(`/assets/sounds/Mechanical-Keyboard-single-button-presses-${i}-www.FesliyanStudios.com.mp3`))
}
// ----------------------------------------------------------------------------

// Pages
// ----------------------------------------------------------------------------
const pages = {
    play:true,
    home:false
}


// Elements
// ----------------------------------------------------------------------------
const center_circle = document.getElementsByClassName('center_circle')[0]
let center_circle_black_real = document.getElementsByClassName('black_circle')[0]
const center_circle_black = document.getElementsByClassName('black_circle_above')[0]
const menu = document.getElementsByClassName('menu')[0]
const play = document.querySelector('.play')
const container = document.querySelector('.container')
const my_name = document.querySelector('.my-name h1')
const getSpeed = ()=> Math.random() * 100 + 50;
const getSoundIndex = ()=> Math.floor(Math.random() * 9);
const my_feature_1 = document.querySelector('.featured_text_1')
const my_feature_2 = document.querySelector('.featured_text_2')
const defult_cursor_size = "50px"
const text = my_name.innerHTML
let my_feature_1_text = my_feature_1.innerHTML
let my_feature_2_text = my_feature_2.innerHTML
const dones = {
    1: false,
    2: false,
    name: false
}
const screenClickText = "1234567890-=qwertyuiop[]asdfghjkl;'zxcvbnm,./"
// Typewriter
const typeWriter = (i,text,element,speed,key)=>{
    if(i < text.length) {
        element.innerHTML += text.charAt(i)
        const soundIndex = getSoundIndex()
        sounds[soundIndex].play()
        setTimeout(()=>typeWriter(i+1,text,element,getSpeed(),key),speed)
    }else{
        enterSound.play()
        dones[key] = true
        if (!dones[1]) {
            typeWriter(0,my_feature_1_text,my_feature_1,getSpeed(),1)
        }else if (!dones[2]) {
            typeWriter(0,my_feature_2_text,my_feature_2,getSpeed(),2) 
        }
    }
}

const screenTyper = (i,text,element,speed)=>{
    if(i < text.length) {
        element.innerHTML = text.charAt(i)
        setTimeout(()=>screenTyper(i+1,text,element,speed),speed)
    }else{
        element.remove();
    }
}


// Mouse
// ----------------------------------------------------------------------------
const cursor = document.querySelector('.dashed_border');
const cursorTriangle = document.querySelector('.mouse_triangle');


// Onload
document.addEventListener('DOMContentLoaded', function(e) {
    arrangeMenuItems()
    addMenuItemListener()
    cursor.style.display = 'none';
    my_feature_1_text = my_feature_1.innerHTML
    my_feature_2_text = my_feature_2.innerHTML
    my_feature_1.innerHTML = '';
    my_feature_2.innerHTML = '';
    my_name.innerHTML = ""
    setTimeout(()=>{
        typeWriter(0,text,my_name,getSpeed(),'name')
    },500  )

});

// Set Menu
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// Listeners
// ----------------------------------------------------------------------------
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Hide on mouse leave
document.addEventListener('mouseleave', () => {
    cursor.style.display = 'none';
    }
);

// Show on mouse enter
document.addEventListener('mouseenter', () => {
    cursor.style.display = 'flex';
    }
);

const onScreenWriter = ()=>{

    const div = document.createElement('div')
    div.style.color = '#fff';
    div.style.fontSize = '20px';
    div.style.position = 'absolute';
    div.style.left = cursor.style.left;
    div.style.top = cursor.style.top;
    div.style.transform = 'translate(-50%,-50%)';
    div.style.zIndex = '1';
    document.body.appendChild(div);
    screenTyper(0,screenClickText,div,40)  

}
document.addEventListener("click",onScreenWriter)

play.addEventListener("mouseenter",()=>{
    cursor.classList.remove("grow_sinker_rotation")
    cursor.classList.add("rotation")

    const minsize = Math.min(play.offsetWidth,play.offsetHeight)
    cursor.style.width = minsize*2 + "px";
    cursor.style.height = minsize*2 + "px";
})

play.addEventListener("mouseleave",()=>{
    cursor.width = defult_cursor_size;
    cursor.height = defult_cursor_size;
    cursor.classList.remove("rotation")
    cursor.classList.add("grow_sinker_rotation")
})

play.addEventListener("click",()=>{
    pages.play = false;
    pages.home = true;
    play.style.display = 'none';
    container.style.display = 'flex';
    // setTimeout(()=>{
    //     typeWriter(0,text,my_name,getSpeed(),'name')
    // },500  )
})

// ----------------------------------------------------------------------------
// Arrange Menu Items on Load and Resize
// ----------------------------------------------------------------------------
const arrangeMenuItems = ()=>{
    const menuIgtems = document.getElementsByClassName('menu_item')
    const totalItems = menuIgtems.length

    // Half items will on the right side of center circle
    const center_circle_top = (center_circle.offsetTop)
    const center_circle_left = (center_circle.offsetLeft)
    const center_circle_width = (center_circle.offsetWidth)
    const center_circle_height = (center_circle.offsetHeight)

    for(let i of menuIgtems){
        i.style.top = "50%"
        i.style.left = "50%"
        i.style.transform = "translate(-50%,-50%)"
    }

    // Make half items in a  circle
    let radius = center_circle_width *0.75
    const angle = (Math.PI * (8/18))/(totalItems/2)
    for(let i=0; i<totalItems/2; i++) {
        menuIgtems[i].querySelector(".menu_content").style.transform = `translate(${-radius * Math.abs(Math.cos(Math.PI * (15.5/18) + angle*i))}px,${-radius *  Math.sin(Math.PI * (15.5/18) + angle*i)}px)`
    }
    // Other half items will on the left side of center circle
    for(let i=totalItems/2; i<totalItems; i++) {
        menuIgtems[i].querySelector(".menu_content").style.transform = `translate(${radius * Math.abs(Math.cos(Math.PI * (15.5/18) + angle*(i-totalItems/2)))}px,${-radius *  Math.sin(Math.PI * (15.5/18) + angle*(i-totalItems/2))}px)`
    }

}

// ----------------------------------------------------------------------------
// Menu Items Listener
// ----------------------------------------------------------------------------
const addMenuItemListener = ()=>{
    const menuItems = document.getElementsByClassName('menu_item')
    for(let i=0; i<menuItems.length; i++) {
        menuItems[i].querySelector(".menu_item_border").addEventListener("mouseenter",(e)=>{
            document.removeEventListener("click",onScreenWriter)
            showAndAnimateCenterBlackCircle(e)
        });
        menuItems[i].querySelector(".menu_item_border").addEventListener("mouseleave",(e)=>{
            document.addEventListener("click",onScreenWriter)
            e.target.removeEventListener("click",noOpClickHandler)
            e.target.removeEventListener("click",opClickHandler)
            center_circle_black.classList.remove("grow_anim")
            center_circle_black.classList.add("shrink_anim")
            center_circle_black.style.border = "none"
            setTimeout(()=>{
                center_circle_black.style.width = "0px"
                center_circle_black.style.height = "0px"
            } ,300)

        });
    }
}

const showAndAnimateCenterBlackCircle = (e)=>{
    center_circle_black.style.display = 'block';
    center_circle_black.classList.remove("shrink_anim")
    center_circle_black.classList.add("grow_anim")
    center_circle_black.style.border = "1px solid #fff"
    const center_black_circle_title = document.querySelector('.black_circle .title')
    const center_black_circle_subtitle = document.querySelector('.black_circle .sub_title')
    const center_black_circle_content = document.querySelector('.black_circle .content')
    const center_black_circle_see_more = document.querySelector('.black_circle .see_more')

    if(e.target.id !==  "skills" && e.target.id !== "hobbies"){
        ind = 0;
        center_black_circle_content.style.display = "block"  
        if(content[e.target.id][0].title){
            center_black_circle_title.style.display = "block" 
            center_black_circle_title.innerHTML = content[e.target.id][0].title
        }
        else
        center_black_circle_title.style.display = "none"    
        if(content[e.target.id][0].sub_title)
            center_black_circle_subtitle.innerHTML = content[e.target.id][0].sub_title
        else
            center_black_circle_subtitle.innerHTML = ""
            center_black_circle_content.innerHTML = ""
        for (cont in content[e.target.id][0].content){
            const divElement = document.createElement('div')
            divElement.innerHTML = "- " + content[e.target.id][0].content[cont]
            divElement.style.marginBottom = "10px"
            center_black_circle_content.appendChild(divElement)
        }

        if(content[e.target.id].length > 1){
            e.target.addEventListener("click",opClickHandler)
            center_black_circle_see_more.innerHTML = `<div> Click to see more </div>`
        }
        else{
            e.target.addEventListener("click",noOpClickHandler)
            center_black_circle_see_more.innerHTML = ""
        }
    }else{
        center_black_circle_content.style.display = "flex"    
        center_black_circle_content.style.flexDirection = "row";
        center_black_circle_content.style.flexWrap = "wrap";
        center_black_circle_content.innerHTML = ""
        center_black_circle_title.style.display = "none"
        center_black_circle_subtitle.innerHTML= ""
        center_black_circle_see_more.innerHTML = "" 
        for(const item of content[e.target.id]){
            const divElement = document.createElement('div')
            divElement.classList.add("skill")
            divElement.innerHTML = item
            center_black_circle_content.appendChild(divElement)
        }
        e.target.addEventListener("click",noOpClickHandler)
    }

    setTimeout(()=>{
        center_circle_black.style.width = "500px"
        center_circle_black.style.height = "500px"
    } ,300)
}

const noOpClickHandler = ()=>{
    center_circle_black_real = center_circle_black.children[0]
    center_circle_black_real.classList.add("slideLeftRightCancelAnim")
    setTimeout(()=>{
        center_circle_black_real.classList.remove("slideLeftRightCancelAnim")
    } ,300)
}

const opClickHandler = (e)=>{
    console.log(e.target.parentNode.id)
    const myContent = content[e.target.parentNode.id]
    ind = (ind + 1) % myContent.length
    center_circle_black_real = center_circle_black.children[0]
    const newBlackCircle = document.createElement('div')
    newBlackCircle.classList.add("black_circle")
    const title = document.createElement('div')
    title.classList.add("title")
    title.innerHTML = myContent[ind].title
    const subTitle = document.createElement('div')
    subTitle.classList.add("sub_title")
    if(myContent[ind].sub_title)
    subTitle.innerHTML = myContent[ind].sub_title
    else
    subTitle.innerHTML = ""
    const contentDiv = document.createElement('div')
    contentDiv.classList.add("content")

    for(const item of myContent[ind].content){
        const divElement = document.createElement('div')
        divElement.innerHTML = "- " + item
        divElement.style.marginBottom = "10px"
        contentDiv.appendChild(divElement)
    }

    const seeMore = document.createElement('div')
    seeMore.classList.add("see_more")
    seeMore.innerHTML = `<div> Click to see more </div>`

    newBlackCircle.appendChild(title)
    newBlackCircle.appendChild(subTitle)
    newBlackCircle.appendChild(contentDiv)
    newBlackCircle.appendChild(seeMore)

    newBlackCircle.style.position = "absolute"
    newBlackCircle.style.top = center_circle_black_real.offsetTop + "px"
    newBlackCircle.style.left = center_circle_black_real.offsetLeft + "px"
    center_circle_black_real.classList.add("slideLeftAnim")
    center_circle_black.appendChild(newBlackCircle)
    newBlackCircle.classList.add("slideLeftToSetAnim")
    // center_circle_black.removeChild(center_circle_black_real)
    setTimeout(()=>{
        newBlackCircle.classList.remove("slideLeftToSetAnim")
        center_circle_black.innerHTML = ""
        center_circle_black.appendChild(newBlackCircle)
        newBlackCircle.style.position = "relative"
    },300);
}