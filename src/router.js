// 一级路由
import About from './components/about/About'
import Admin from './components/Admin'
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'

//二级路由 
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

export const routes =[
	{path:"/",name:'homeLink',components:{
		default:Home,
		"orderingGuide":OrderingGuide,
		"history":History,
		"delivery":Delivery
	}},
	{path:"/menu",name:'menuLink',component:Menu},
	{path:"/admin",name:'adminLink',component:Admin},
	{path:"/login",name:'loginLink',component:Login},
	{path:"/register",name:'registerLink',component:Register},
	{path:"/about",name:'aboutLink',component:About,children:[
		{path:"/contact",name:"contactLink",component:Contact},
		{path:"/about/delivery",name:"deliveryLink",component:Delivery},
		{path:"/about/history",name:"historyLink",component:History},
		{path:"/about/orderingGuide",name:"orderingGuideLink",component:OrderingGuide}
	]},
	// 以上都没有匹配到的话，引导到主页
	{path:"*",redirect:"/"}
]