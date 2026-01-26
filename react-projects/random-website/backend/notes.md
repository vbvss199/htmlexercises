<!-- cors policy in web development  -->
sometimes access is blocked to the api by another client {react}
<!-- cross origin resource sharing , it is a kind of security mechanism which blocks using the api  -->
<!-- we need to add some code to the backend server in order to handle this corse origin resource sharing error  -->
install npm i corse 
start importing in index.js and use it
// cors as an middleware 
// option1 :allow all origins with deafault od cors(*)
app.use(cors());

// option 2 allowing the custom origins
// specify the origin u want to allow  
app.use(cors({
    origin:'http://localhost:3000',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type'],
}))
