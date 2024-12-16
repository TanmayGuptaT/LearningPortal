import { Javascript } from "../../../utils/images"

const NotesData=[
{id:1,title:'Javascript',sentence:'JavaScript is the world\'s most popular programming language.'},
{id:2,title:'Javascript',sentence:'JavaScript is the programming language of the Web.'},
{id:3,title:'Javascript',sentence:'JavaScript is easy to learn.'},
{id:4,title:'Javascript',sentence:'This tutorial will teach you JavaScript from basic to advanced.'},
{id:5,title:'Javascript',sentence:'JavaScript is a programming language used for creating dynamic content on websites. It is a lightweight, cross-platform, and single-threaded programming language. JavaScript is an interpreted language that executes code line by line providing more flexibility.'},
{id:6,title:'Javascript',sentence:'Versatility: JavaScript can be used to develop (using Election JS) websites, games (Using Phaser and Three.js), mobile apps (using React Native), and more.'},
{id:7,title:'Typescript',sentence:'TypeScript is JavaScript with added syntax for types.'},
{id:8,title:'Typescript',sentence:'TypeScript is a syntactic superset of JavaScript which adds static typing.'},
{id:9,title:'Typescript',sentence:'This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.'},
{id:10,title:'Typescript',sentence:'TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.'},
{id:11,title:'Typescript',sentence:'TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js, Deno, Bun and in your apps.'},
{id:12,title:'Typescript',sentence:'TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.'},
{id:13,title:'Java',sentence:'Java is a popular programming language.'},
{id:14,title:'Java',sentence:'Java is used to develop mobile apps, web apps, desktop apps, games and much more.'},
{id:15,title:'Java',sentence:'Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.'},
{id:16,title:'Java',sentence:'While most modern Java applications combine the Java runtime and application together, there are still many applications and even some websites that will not function unless you have a desktop Java installed. Java.com, this website, is intended for consumers who may still require Java for their desktop applications – specifically applications targeting Java 8. Developers as well as users that would like to learn Java programming should visit the dev.java website instead and business users should visit oracle.com/java for more information.'},
{id:17,title:'Python',sentence:'Python is a popular programming language.'},
{id:18,title:'Python',sentence:'Python can be used on a server to create web applications.'},
{id:19,title:'Python',sentence:'Python is a versatile and powerful programming language that is widely used for various applications, including web development, data analysis, artificial intelligence, and more. Here are the essential steps to get started with Python:'},
{id:20,title:'kotlin',sentence:'Kotlin is a modern, trending programming language.'},
{id:21,title:'kotlin',sentence:'Kotlin is easy to learn, especially if you already know Java (it is 100% compatible with Java).'},
{id:22,title:'kotlin',sentence:'Kotlin is used to develop Android apps, server side apps, and much more.'},
]

const ClassesData=[
    {
        id: 1,
        title: "Class 20",
        date: '15-12-2024',
        poster: Javascript,
        trailer: "https://example.com/shawshank_redemption_trailer.mp4",
        description:'Number Methods',
        duration:'1 hour'
    },
    {
        id: 2,
        title: "Class 19",
        date: '14-12-2024',
        poster: Javascript,
        trailer: "https://example.com/the_godfather_trailer.mp4",
    description:'JavaScript BigInt',
        duration:'1 hour'
    },
    {
        id: 3,
        title: "Class 18",
        date: '13-12-2024',
        poster: Javascript,
        trailer: "https://example.com/the_dark_knight_trailer.mp4",
    description:'Template Strings',
        duration:'1 hour'
    },
    {
        id: 4,
        title: "Class 17",
        date: '12-12-2024',
        poster: Javascript,
        trailer: "https://example.com/pulp_fiction_trailer.mp4",
    description:'JavaScript Numbers',
        duration:'1 hour'
    },
    {
        id: 5,
        title: "Class 16",
        date: '11-12-2024',
        poster: Javascript,
        trailer: "https://example.com/forrest_gump_trailer.mp4",
    description:'String Search',
        duration:'1 hour'
    },
    {
        id: 6,
        title: "Class 15",
        date: '10-12-2024',
        poster: Javascript,
        trailer: "https://example.com/inception_trailer.mp4",
    description:'String Methods',
        duration:'1 hour'
    },
    {
        id: 7,
        title: "Class 14",
        date: '09-12-2024',
        poster: Javascript,
        trailer: "https://example.com/the_matrix_trailer.mp4",
    description:'JavaScript Strings',
        duration:'1 hour'
    },
    {
        id: 8,
        title: "Class 13",
        date: '08-12-2024',
        poster: Javascript,
        trailer: "https://example.com/lotr_return_of_the_king_trailer.mp4",
    description:'JavaScript Events',
        duration:'1 hour'
    },
    {
        id: 9,
        title: "Class 12",
        date: '07-12-2024',
        poster: Javascript,
        trailer: "https://example.com/the_dark_knight_rises_trailer.mp4",
    description:'Object Constructors',
        duration:'1 hour'
    },
    {
        id: 10,
        title: "Class 11",
        date: '06-12-2024',
        poster: Javascript,
        trailer: "https://example.com/interstellar_trailer.mp4",
    description:'Display Objects',
        duration:'1 hour'
    },
    {
        id: 11,
        title: "Class 10",
        date: '05-12-2024',
        poster: Javascript,
        trailer: "https://example.com/fight_club_trailer.mp4",
    description:'Object Methods',
        duration:'1 hour'
    },
    {
        id: 12,
        title: "Class 09",
        date: '04-12-2024',
        poster: Javascript,
        trailer: "https://example.com/gladiator_trailer.mp4",
    description:'Object Properties',
        duration:'1 hour'
    },
    {
        id: 13,
       title: "Class 08",
        date: '03-12-2024',
        poster: Javascript,
        trailer: "https://example.com/lotr_two_towers_trailer.mp4",
    description:'JavaScript Objects',
        duration:'1 hour'
    },
    {
        id: 14,
        title: "Class 07",
        date: '02-12-2024',
        poster: Javascript,
        trailer: "https://example.com/silence_of_the_lambs_trailer.mp4",
    description:'JavaScript Functions',
        duration:'1 hour'
    },
    {
        id: 15,
        title: "Class 06",
        date: '01-12-2024',
        poster: Javascript,
        trailer: "https://example.com/the_departed_trailer.mp4",
    description:'Data Types',
        duration:'1 hour'
    },
    {
        id: 16,
        title: "Class 05",
        date: '30-11-2024',
        poster: Javascript,
        trailer: "https://example.com/saving_private_ryan_trailer.mp4",
    description:'JavaScript Variables',
        duration:'1 hour'
    },
    {
        id: 17,
        title: "Class 04",
        date: '29-11-2024',
        poster: Javascript,
        trailer: "https://example.com/the_prestige_trailer.mp4",
    description:'JavaScript Assignment',
        duration:'1 hour'
    },
    {
        id: 18,
        title: "Class 03",
        date: '28-11-2024',
        poster: Javascript,
        trailer: "https://example.com/glory_trailer.mp4",
    description:'JavaScript Arithmetic',
        duration:'1 hour'
    },
    {
        id: 19,
        title: "Class 02",
        date: '27-11-2024',
        poster: Javascript,
        trailer: "https://example.com/the_avengers_trailer.mp4",
        description:'JavaScript Operators',
        duration:'1 hour'
    },
    {
        id: 20,
        title: "Class 01",
        date: '26-11-2024',
        poster: Javascript,
        trailer: "https://example.com/the_lion_king_trailer.mp4",
        description:'JavaScript Variables',
        duration:'1 hour'
    }
]

export {NotesData,ClassesData}