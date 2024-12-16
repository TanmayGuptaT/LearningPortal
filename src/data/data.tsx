import { Computer, Economics, ELearning, English, Geography, Javascript, LoginLogo, MachineLearning, Maths, Science, TypeScript } from "../utils/images"

const Data=[
    {iconName:'cast-for-education',numberOfCources:5,coureStatus:'Completed Courses',color:'#1F9FE2',id:1},
    {iconName:'pages',numberOfCources:10,coureStatus:'All Courses',color:'#73ECAF',id:2},
    {iconName:'workspace-premium',numberOfCources:5,coureStatus:'Courses inprogress',color:'#5C23D1',id:3},
    {iconName:'group',numberOfCources:100,coureStatus:'Comunity Support',color:'#D8962D',id:4}
]

const CourseTiming=[
    {iconName:'smart-display',tutorials:50,nextText:'tutorials'},
    {iconName:'schedule',tutorials:'02:30',nextText:'hours/Daily'}
]

const CoursesData=[
    {image:ELearning,title:'E Learning',progress:'65%',time:'30',id:1},
    {image:Maths,title:'Maths',progress:'45%',time:'1:30',id:2},
    {image:Science,title:'Science',progress:'75%',time:'2:30',id:3},
    {image:English,title:'English',progress:'90%',time:'3:30',id:4},
    {image:Geography,title:'Geography',progress:'30%',time:'4:30',id:5},
    {image:Javascript,title:'Javascript',progress:'65%',time:'5:30',id:6},
    {image:TypeScript,title:'Typescript',progress:'45%',time:'6:30',id:7},
    {image:Economics,title:'Economics',progress:'75%',time:'7:30',id:8},
    {image:MachineLearning,title:'Machine Learning',progress:'90%',time:'8:30',id:9},
    {image:Computer,title:'Computer',progress:'30%',time:'9:30',id:10}
]

const CourseAssetsData=[
    {title:'Videos',id:1},{title:'Notes',id:2},{title:'Assignment',id:3}
]

const NotesListData=[
    {title:'15-12-2024',id:1},
    {title:'14-12-2024',id:2},
    {title:'13-12-2024',id:3},
    {title:'12-12-2024',id:4},
    {title:'11-12-2024',id:5}
]

const NotificationData=[
    {id:1,title:'notification 1',description:'this is first notification',img:LoginLogo},
    {id:2,title:'notification 2',description:'this is second notification',img:LoginLogo},
    {id:3,title:'notification 3',description:'this is third notification',img:LoginLogo},
    {id:4,title:'notification 4',description:'this is fourth notification',img:LoginLogo},
    {id:5,title:'notification 5',description:'this is fifth notification',img:LoginLogo}
]

export {Data,CourseTiming,CoursesData,CourseAssetsData,NotesListData,NotificationData}