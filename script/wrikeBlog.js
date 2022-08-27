let data=[
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/08/iStock-1340256496-e1661253296302.jpg?av=57e0c704b031146822531d7dc2f52aa4",
        h:"How to Plan an Event: Best Practice Guide",
        p2:"PROJECT MANAGEMENT . ",
        p3:"10 MIN READ",
        h2:"",
        p:"Discover how to plan an event with event planning steps and best practices in this event...        ",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/06/iStock-1322301439.jpg?av=c54f6504d1bbea32efb28835736b9900",
        h:"The Ultimate Guide to Marketing Campaign Management",
        p2:"MARKETING . ",
        p3:"10 MIN READ",
        h2:"",
        p:"Campaign management requires diligent planning, timely execution, and a ton of knowledge...        ",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/07/blog-grid_Dark-Matter-of-Work_Dark-theme_2x.png?av=877a4731d04a63707c9b11f5c888e4e6",
        h:"Dark Matter of Work: The Hidden Cost of Work Complexities",
        p2:"",
        p3:"",
        h2:"Download free report →",
        p:"Modern work complexities are draining organizational efficiency. Learn the true cost of what we call the Dark Matter of Work in our new report.",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/08/iStock-1358219358-e1660902260998.jpg?av=9e982aa7f77e3bc135378a3a1be22e30",
        h:"Go-to-Market Strategy Examples You Need to Know",
        p2:"PROJECT MANAGEMENT . ",
        p3:"7 MIN READ",
        h2:"",
        p:"Discover the go-to-market strategy examples to attract customers, gain market share and...        ",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/08/iStock-1398260676-e1660662689341.jpg?av=162db78bfbf126e81d110b47f756bf0a",
        h:"How Wrike Solutions Manager Valerio Nocera Maximizes a Hybrid Work Schedule for Better Work-Life Balance",
        p:"How does hybrid working impact employees’ day-to-day schedules? Wrike employee Valerio...        ",
        p2:"REMOTE WORKING . ",
        p3:"5 MIN READ",
        h2:"",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2018/11/Blog_Trial-Promo_2x.png?av=41d65c45c8f8b9619f0256ec33127e98",
        h:"Try Wrike Free for 14 Days!",
        p:"",
        p2:"",
        p3:"",
        h2:"",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/06/blog-wallmart_2x.jpg?av=953f15f78549385e93fad933c9fbad01",
        h:"Walmart Canada automates operations with Wrike",
        p2:"",
        p3:"",
        h2:"Read their story →",
        p:"Walmart Canada transformed their project management processes and streamlined communication with Wrike.",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2022/08/giorgio-trovato-hnbd2Dmrqi0-unsplash-e1660563206126.jpg?av=f45776e31c82337f70206f187744a8a3",
        h:"The Weeknd More Popular on Tuesdays",
        p2:"PRODUCTIVITY . ",
        p3:"5 MIN READ",
        h2:"",
        p:"While researching the best music for productivity, Wrike discovered that The Weeknd is in...        ",
    },
    {
        img:"https://web-static.wrike.com/cdn-cgi/image/width=328,height=187,fit=crop,format=auto,q=80/blog/content/uploads/2019/07/How-to-Drive-Action-Items-With-the-Ultimate-Meeting-Notes-Template-1.jpg?av=9ae928aaa397387ed0578ae0d395a33f",
        h:"How to Action Items in Meeting Minutes",
        p2:"PROJECT MANAGEMENT . ",
        p3:"10 MIN READ",
        h2:"",
        p:"Discover how to write meeting minutes and strategies for creating action items in meeting...        ",
    }
]

let display=()=>{
    data.forEach(({img,h,p,p2,p3,h2})=>{
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=img
        let hea=document.createElement("h2")
        hea.innerText=h
        let par=document.createElement("p")
        par.innerText=p
        let par2=document.createElement("a")
        par2.innerText=p2
        let span=document.createElement("span")
        span.innerText=p3
        let low=document.createElement("h3")
        low.innerText=h2
        par2.append(span)
        div.append(image,par2,hea,par,low)
        document.querySelector("#lower").append(div)
    })
}
display()
let emailfun=()=>{
    let email=document.querySelector("#email").value
    if(email==""){
        alert("enter your email")
        return
    }
    document.querySelector("#sub").innerText="Check your inbox, the first tips are already delivered. Have a great day! Your Wrike team"
}
let loginfun=()=>{
    window.location.href="#"
}
loginfun()